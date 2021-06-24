type HeadItem = {
  id?: string;
  name: string;
  hideLabel?: boolean;
  active?: boolean;
  direction?: 'asc' | 'desc';
  style?: React.CSSProperties;
};

export const headVrt: HeadItem[] = [
  { name: 'Slotted Styles', id: 'some-id', active: false, direction: 'asc' },
  { name: 'Multiline text', id: 'some-id', active: true, direction: 'desc' },
  { name: 'Min width cell', style: { minWidth: 250 } },
  { name: 'Multiline<br/>header<br/>cell', id: 'some-id', active: true, direction: 'asc' },
  { name: 'Hide header cell', hideLabel: true },
];

type DataItem = {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  html: string;
  longText: string;
  shortText: string;
};

export const dataVrt: DataItem[] = Array.from(Array(4)).map(() => ({
  imageUrl: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
  imageWidth: 80,
  imageHeight: 48,
  html: "<a href='#'>link</a>&nbsp;<b>bold</b>&nbsp;<i>italic</i>&nbsp;<strong>strong</strong>&nbsp;<em>emphasized</em>",
  longText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
  shortText: 'Some text',
}));
