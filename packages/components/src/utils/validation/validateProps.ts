import { BreakpointKey, BREAKPOINTS, BreakpointValues, parseJSON } from '../breakpoint-customizable';
import type { AriaAttributes } from '../../aria-types';
import { parseJSONAttribute } from '../json';
import type { TagName } from '@porsche-design-system/shared';
import type { EventEmitter } from '@stencil/core';

type ValidatorFunction = (propName: string, propValue: any, componentName: string) => ValidationError;
type ValidatorFunctionOneOfCreator = <T>(allowedValues: T[] | readonly T[]) => ValidatorFunction;
type ValidatorFunctionBreakpointCustomizableCreator = <T>(
  allowedValues: Extract<AllowedTypesKeys, 'boolean'> | T[] | readonly T[]
) => ValidatorFunction;
type ValidatorFunctionShapeCreator = <T>(allowedValues: {
  [key in keyof T]: ValidatorFunctionOrCreator;
}) => ValidatorFunction;
type ValidatorFunctionOrCreator =
  | ValidatorFunction
  | ValidatorFunctionOneOfCreator
  | ValidatorFunctionBreakpointCustomizableCreator
  | ValidatorFunctionShapeCreator;

export type ValidationError = {
  componentName: string;
  propName: string;
  propValue: string;
  propType: string;
};

export const formatObjectOutput = (value: any): string => {
  return JSON.stringify(value)
    .replace(/"([A-z?]+)":/g, '$1:')
    .replace(/([,:{])/g, '$1 ')
    .replace(/(})/g, ' $1')
    .replace(/^"(.+)"$/, '$1');
};

export const formatArrayOutput = <T>(value: T[] | readonly T[]): string => {
  // eslint-disable-next-line @typescript-eslint/quotes
  return JSON.stringify(value).replace(/'/g, '').replace(/"/g, "'").replace(/,/g, ', ');
};

// TODO: prefixing
export const printErrorMessage = ({ propName, propValue, componentName, propType }: ValidationError): void => {
  console.error(
    `Warning: Invalid property '${propName}' with value '${formatObjectOutput(
      propValue
    )}' supplied to '${componentName}', expected one of: ${propType}`
  );
};

export const isValueNotOfType = (propValue: any, propType: string): boolean => {
  return propValue !== undefined && typeof propValue !== propType;
};

export const validateValueOfType = (
  propName: string,
  propValue: any,
  componentName: string,
  propType: string
): ValidationError => {
  if (isValueNotOfType(propValue, propType)) {
    return { propName, propValue, componentName, propType };
  }
};

const breakpointCustomizableTemplate =
  'value, ' +
  formatObjectOutput(
    BREAKPOINTS.reduce((prev, key) => ({ ...prev, [key + (key !== 'base' ? '?' : '')]: 'value' }), {})
  ).replace(/"/g, '');

export const getBreakpointCustomizableStructure = <T>(
  allowedValues: Extract<AllowedTypesKeys, 'boolean'> | T[] | readonly T[]
): string => {
  if (allowedValues !== 'boolean') {
    allowedValues = formatArrayOutput(allowedValues).replace('[', '(').replace(']', ')[]').replace(/,/g, ' |') as any;
  }
  return breakpointCustomizableTemplate.replace(/value/g, allowedValues as string);
};

export const getAriaStructure = <T>(allowedAriaAttributes: readonly T[]): string => {
  return (
    formatObjectOutput(
      allowedAriaAttributes.reduce(
        (prev, key) => ({
          ...prev,
          [key as any]: 'value',
        }),
        {}
      )
    )
      .replace(/":/g, '"?:')
      // eslint-disable-next-line @typescript-eslint/quotes
      .replace(/"/g, "'")
  );
};

export const getShapeStructure = <T>(shapeStructure: { [key in keyof T]: ValidatorFunction }): string => {
  return formatObjectOutput(
    Object.keys(shapeStructure).reduce((prev, key) => ({ ...prev, [key]: shapeStructure[key].name || 'string' }), {})
  ).replace(/"/g, '');
};

export const isBreakpointCustomizableValueInvalid = <T>(
  value: any,
  allowedValues: Extract<AllowedTypesKeys, 'boolean'> | T[] | readonly T[]
): boolean => {
  return allowedValues === 'boolean' ? isValueNotOfType(value, allowedValues) : !allowedValues.includes(value as T);
};

type AllowedTypesKeys = 'string' | 'number' | 'boolean';

export const AllowedTypes: {
  [key in AllowedTypesKeys]: ValidatorFunction;
} & {
  oneOf: ValidatorFunctionOneOfCreator;
  aria: ValidatorFunctionOneOfCreator;
  breakpoint: ValidatorFunctionBreakpointCustomizableCreator;
  shape: ValidatorFunctionShapeCreator;
} = {
  // eslint-disable-next-line id-blacklist
  string: (...args) => validateValueOfType(...args, 'string'),
  // eslint-disable-next-line id-blacklist
  number: (...args) => validateValueOfType(...args, 'number'),
  // eslint-disable-next-line id-blacklist
  boolean: (...args) => validateValueOfType(...args, 'boolean'),
  oneOf:
    <T>(allowedValuesOrValidatorFunctions: T[]): ValidatorFunction =>
    (propName, propValue, componentName) => {
      // use first item to determine if we've got primitive types or validator functions
      if (typeof allowedValuesOrValidatorFunctions[0] !== 'function') {
        if (!allowedValuesOrValidatorFunctions.includes(propValue as T)) {
          return { propName, propValue, componentName, propType: formatArrayOutput(allowedValuesOrValidatorFunctions) };
        }
      } else if (
        !allowedValuesOrValidatorFunctions.some(
          (func) => (func as unknown as ValidatorFunction)(propName, propValue, componentName) === undefined
        )
      ) {
        return {
          propName,
          propValue,
          componentName,
          propType: allowedValuesOrValidatorFunctions.map((func) => (func as any).name || 'string').join(', '),
        };
      }
    },
  breakpoint: (allowedValues): ValidatorFunction => {
    return (propName, propValue, componentName) => {
      const value = parseJSON(propValue as BreakpointValues<any>);
      let isInvalid = false;

      if (typeof value === 'object') {
        if (
          // check structure
          Object.keys(value).some((key) => !BREAKPOINTS.includes(key as BreakpointKey)) ||
          // check values
          Object.values(value).some((val) => isBreakpointCustomizableValueInvalid(val, allowedValues))
        ) {
          isInvalid = true;
        }
      } else if (isBreakpointCustomizableValueInvalid(value, allowedValues)) {
        // single
        isInvalid = true;
      }

      if (isInvalid) {
        return {
          propName,
          propValue: formatObjectOutput(value),
          componentName,
          propType: getBreakpointCustomizableStructure(allowedValues),
        };
      }
    };
  },
  aria: <T = keyof AriaAttributes>(allowedAriaAttributes: readonly T[]): ValidatorFunction => {
    return (propName, propValue, componentName) => {
      const ariaAttributes = parseJSONAttribute<AriaAttributes>(propValue as string);
      if (
        ariaAttributes &&
        Object.keys(ariaAttributes).some((ariaKey) => !allowedAriaAttributes.includes(ariaKey as unknown as T))
      ) {
        return {
          propName,
          propValue: formatObjectOutput(ariaAttributes),
          componentName,
          propType: getAriaStructure(allowedAriaAttributes),
        };
      }
    };
  },
  shape: <T>(shapeStructure: { [key in keyof T]: ValidatorFunction }): ValidatorFunction => {
    return (propName, propValue, componentName) => {
      if (propValue) {
        // const propValueKeys = Object.keys(propValue);
        if (
          // check structure, but propValue could contain additional keys
          // but how to handle optional keys like in table-head-cell's sort property?
          // Object.keys(shapeStructure).some((key) => !propValueKeys.includes(key)) ||
          // check values
          Object.entries(shapeStructure).some(([structureKey, validatorFunc]: [string, ValidatorFunction]) =>
            validatorFunc(structureKey, propValue[structureKey], componentName)
          )
        ) {
          // TODO: more precise inner errors from value validation could be output
          return {
            propName,
            propValue, // TODO: convert to string?
            componentName,
            propType: getShapeStructure(shapeStructure),
          };
        }
      }
    };
  },
};

// utility type to return public properties of generic type that are not a function or EventEmitter
type FunctionPropertyNames<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof T]: T[K] extends Function | EventEmitter ? K : never;
}[keyof T];

// eslint-disable-next-line @typescript-eslint/ban-types
type Class<T> = Function & {
  new (...args: any[]): T; // eslint-disable-line @typescript-eslint/prefer-function-type
};

// utility type to retrieve all props based on a class
export type PropTypes<T extends Class<any>> = Required<{
  [Property in keyof Omit<
    InstanceType<T>,
    'host' | FunctionPropertyNames<InstanceType<T>>
  >]: ValidatorFunctionOrCreator;
}>;

export const validateProps = <T extends Class<any>>(
  instance: InstanceType<T>,
  propTypes: PropTypes<T>,
  componentName: TagName
): void => {
  Object.entries(propTypes)
    .map(([propKey, validatorFunc]: [string, ValidatorFunction]) =>
      validatorFunc(propKey, instance[propKey], componentName)
    )
    .filter((x) => x)
    .forEach(printErrorMessage);
};
