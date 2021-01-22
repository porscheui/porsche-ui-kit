import type { TagName } from '../../src/tags';
import { ReactWrapperGenerator } from './ReactWrapperGenerator';
import { ExtendedProp } from './DataStructureBuilder';

export class UXPinReactWrapperGenerator extends ReactWrapperGenerator {
  protected projectDir = 'uxpin-wrapper';

  public generateImports(component: TagName, extendedProps: ExtendedProp[], nonPrimitiveTypes: string[]): string {
    return super
      .generateImports(component, extendedProps, nonPrimitiveTypes)
      .replace(/import type/g, 'import')
      .replace(/(?:HTMLAttributes|useMergedClass)(?:, )?/g, '')
      .replace(/(import) ({.*} from 'react')/, '$1 React, $2');
  }

  public generateProps(component: TagName, rawComponentInterface: string): string {
    return super.generateProps(component, rawComponentInterface).replace('HTMLAttributes<{}> & ', '');
  }

  public generateComponent(component: TagName, extendedProps: ExtendedProp[]): string {
    return super
      .generateComponent(component, extendedProps)
      .replace(/export const \w+ =/, 'export default')
      .replace('className, ', '')
      .replace(/\s+class.*/, '');
  }
}
