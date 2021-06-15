type DataItem = {
  id?: string;
  imageUrl: string;
  model: string;
  date: string;
  interest: string;
  vin: string;
  purchaseIntention: string;
  status: string;
  leadId: string;
};

export const head: any[] = [
  { name: 'Model', id: 'model' },
  { name: 'Interest', id: 'interest' },
  { name: 'VIN', id: 'vin' },
  { name: 'Purchase Intention', id: 'purchaseIntention' },
  { name: 'Status', id: 'status' },
  { name: 'Lead ID', id: 'leadId' },
  { name: 'Action', id: 'action' },
].map((item, i) => ({
  ...item,
  hideLabel: false,
  ...(i > 0 && {
    active: i === 1,
    direction: 'asc',
  }),
}));

export const data: DataItem[] = [
  {
    imageUrl: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
    model: '911 Carrera S',
    date: '03.05.2021',
    interest: 'New Car',
    vin: '-',
    purchaseIntention: '08.2020',
    status: 'Won',
    leadId: '0000824402',
  },
  {
    imageUrl: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
    model: '911 Carrera S',
    date: '03.05.2021',
    interest: 'New Car',
    vin: '-',
    purchaseIntention: '11.2020',
    status: 'Lost',
    leadId: '0000824409',
  },
  {
    imageUrl: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
    model: '911 Carrera S',
    date: '03.05.2021',
    interest: 'Used Car',
    vin: '-',
    purchaseIntention: '09.2020',
    status: 'Won',
    leadId: '0000824408',
  },
  {
    imageUrl: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
    model: '911 Carrera S',
    date: '03.05.2021',
    interest: 'Used Car',
    vin: '-',
    purchaseIntention: '04.2020',
    status: 'Lost',
    leadId: '0000824407',
  },
  {
    imageUrl: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
    model: '911 Carrera S',
    date: '03.05.2021',
    interest: 'New Car',
    vin: '-',
    purchaseIntention: '03.2020',
    status: 'Won',
    leadId: '0000824406',
  },
];
