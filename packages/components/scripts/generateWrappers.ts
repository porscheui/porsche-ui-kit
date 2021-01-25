import { WrapperGenerator } from './wrapper-generator';

const generateWrappers = (): void => {
  const generator = new WrapperGenerator();
  generator.generate('react');
  generator.generate('uxpin');
};

generateWrappers();
