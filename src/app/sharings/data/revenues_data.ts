import { Revenue } from './../models/revenue';

export const Revenue01: Revenue = {
  id: 1,
  description: 'Advertising',
  total: 1000,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
}

export const Revenue02: Revenue = {
  id: 2,
  description: 'Store Barber',
  total: 2000,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
}

export const Revenue03: Revenue = {
  id: 3,
  description: 'Advertising',
  total: 1000,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
}

export const Revenues: Revenue[] = [
  Revenue01, Revenue02
];
