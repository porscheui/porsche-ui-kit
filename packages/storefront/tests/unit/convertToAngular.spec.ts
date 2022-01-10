import {
  cleanBooleanValues,
  cleanClassAndSlotAttributes,
  convertToAngular,
  transformAttributesWithDigitValue,
  transformAttributesWithNotDigitValue,
  transformAttributesWithObjectValues,
  transformEvents,
} from '../../src/utils';

const markup = `<p-some-tag some-attribute="some value" attribute="some value" class="some-class" another-attribute="{ bar: 'foo' }" onclick="alert('click'); return false;" onchange="alert('click'); return false;" digit-attribute="6" boolean-attribute="true" aria-label="something label" aria-something="Something foo" name="1">
  <span>some text</span>
  <span slot="some-slot">some slot text</span>
</p-some-tag>`;

describe('transformEvents()', () => {
  it('should transform only events into angular syntax', () => {
    expect(transformEvents(markup)).toBe(
      `<p-some-tag some-attribute="some value" attribute="some value" class="some-class" another-attribute="{ bar: 'foo' }" (click)="alert('click'); return false;" (change)="alert('click'); return false;" digit-attribute="6" boolean-attribute="true" aria-label="something label" aria-something="Something foo" name="1">
  <span>some text</span>
  <span slot="some-slot">some slot text</span>
</p-some-tag>`
    );
  });
});

describe('transformAttributesWithObjectValues()', () => {
  it('should transform only attributes with object values into angular syntax', () => {
    expect(transformAttributesWithObjectValues(markup)).toBe(
      `<p-some-tag some-attribute="some value" attribute="some value" class="some-class" [anotherAttribute]="{ bar: 'foo' }" onclick="alert('click'); return false;" onchange="alert('click'); return false;" digit-attribute="6" boolean-attribute="true" aria-label="something label" aria-something="Something foo" name="1">
  <span>some text</span>
  <span slot="some-slot">some slot text</span>
</p-some-tag>`
    );
  });
});

describe('transformAttributesWithNotDigitValue()', () => {
  it('should transform only attributes without digit values', () => {
    expect(transformAttributesWithNotDigitValue(markup)).toBe(
      `<p-some-tag [someAttribute]="'some value'" [attribute]="'some value'" [class]="'some-class'" [anotherAttribute]="'{ bar: 'foo' }'" [onclick]="'alert('click'); return false;'" [onchange]="'alert('click'); return false;'" digit-attribute="6" [booleanAttribute]="'true'" aria-label="something label" aria-something="Something foo" name="1">
  <span>some text</span>
  <span [slot]="'some-slot'">some slot text</span>
</p-some-tag>`
    );
  });
});

describe('transformAttributesWithDigitValue()', () => {
  it('should transform attributes with digit values', () => {
    expect(transformAttributesWithDigitValue(markup)).toBe(
      `<p-some-tag some-attribute="some value" attribute="some value" class="some-class" another-attribute="{ bar: 'foo' }" onclick="alert('click'); return false;" onchange="alert('click'); return false;" [digitAttribute]="6" boolean-attribute="true" aria-label="something label" aria-something="Something foo" [name]="'1'">
  <span>some text</span>
  <span slot="some-slot">some slot text</span>
</p-some-tag>`
    );
  });
});

describe('cleanBooleanValues()', () => {
  it('should remove single quotes from boolean values after initial transform', () => {
    const transformedMarkup = transformAttributesWithNotDigitValue(markup);

    expect(cleanBooleanValues(transformedMarkup)).toBe(
      `<p-some-tag [someAttribute]="'some value'" [attribute]="'some value'" [class]="'some-class'" [anotherAttribute]="'{ bar: 'foo' }'" [onclick]="'alert('click'); return false;'" [onchange]="'alert('click'); return false;'" digit-attribute="6" [booleanAttribute]="true" aria-label="something label" aria-something="Something foo" name="1">
  <span>some text</span>
  <span [slot]="'some-slot'">some slot text</span>
</p-some-tag>`
    );
  });
});

describe('cleanClassAndSlotAttributes()', () => {
  it('should remove brackets from "class" and "slot("|slot) attributes after initial transform', () => {
    const transformedMarkup = transformAttributesWithNotDigitValue(markup);

    expect(cleanClassAndSlotAttributes(transformedMarkup)).toBe(
      `<p-some-tag [someAttribute]="'some value'" [attribute]="'some value'" class="some-class" [anotherAttribute]="'{ bar: 'foo' }'" [onclick]="'alert('click'); return false;'" [onchange]="'alert('click'); return false;'" digit-attribute="6" [booleanAttribute]="'true'" aria-label="something label" aria-something="Something foo" name="1">
  <span>some text</span>
  <span slot="some-slot">some slot text</span>
</p-some-tag>`
    );
  });
});

describe('convertToAngular()', () => {
  // check that every function is called
  it('should convert markup to Angular syntax', () => {
    expect(convertToAngular(markup)).toBe(
      `<p-some-tag [someAttribute]="'some value'" [attribute]="'some value'" class="some-class" [anotherAttribute]="{ bar: 'foo' }" (click)="alert('click'); return false;" (change)="alert('click'); return false;" [digitAttribute]="6" [booleanAttribute]="true" aria-label="something label" aria-something="Something foo" [name]="'1'">
  <span>some text</span>
  <span slot="some-slot">some slot text</span>
</p-some-tag>`
    );
  });
});
