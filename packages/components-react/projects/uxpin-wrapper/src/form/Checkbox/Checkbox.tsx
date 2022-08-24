import { CheckboxWrapper, PCheckboxWrapperProps } from '../../lib/components/CheckboxWrapper/CheckboxWrapper';
import { DummyCheckbox, DummyCheckboxProps, dummyCheckboxPropsKeys } from '../../dummy/DummyCheckbox';
import { partitionProps } from '../../form-utils';

export type CheckboxProps = PCheckboxWrapperProps & DummyCheckboxProps;

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const [dummyCheckboxProps, wrapperProps] = partitionProps(props, dummyCheckboxPropsKeys);

  return (
    <CheckboxWrapper {...wrapperProps}>
      <DummyCheckbox {...dummyCheckboxProps} />
    </CheckboxWrapper>
  );
};
