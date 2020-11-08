import { CostType } from './../models/cost-details';
import { CostDetails } from "../models/cost-details";

export const CostMarketing: CostType = {
  id: 1,
  costTypeName: 'Marketing'
}

export const CostSalary: CostType = {
  id: 2,
  costTypeName: 'Salary'
}

export const CostTypes: CostType[] = [
  CostMarketing, CostSalary
];

export const CostsData: CostDetails[] = [
  {
    id: 1,
    costDescription: 'Marketing Facebook',
    costType: CostMarketing,
    total: 2000,
    createAt: new Date('2020-10-30T19:50:00.000+09:00'),
    updateAt: new Date('2020-10-30T19:50:00.000+09:00')
  }, {
    id: 2,
    costDescription: "Salary's Son Hoang",
    costType: CostSalary,
    total: 3000,
    createAt: new Date('2020-10-30T19:50:00.000+09:00'),
    updateAt: new Date('2020-10-30T19:50:00.000+09:00')
  }, {
    id: 3,
    costDescription: "Salary's Hoang Phuc Huy",
    costType: CostSalary,
    total: 3000,
    createAt: new Date('2020-10-30T19:50:00.000+09:00'),
    updateAt: new Date('2020-10-30T19:50:00.000+09:00')
  }, {
    id: 4,
    costDescription: "Salary's Nguyen Thanh Dat",
    costType: CostSalary,
    total: 3000,
    createAt: new Date('2020-10-30T19:50:00.000+09:00'),
    updateAt: new Date('2020-10-30T19:50:00.000+09:00')
  }, {
    id: 5,
    costDescription: "Salary's Huynh Duc Minh",
    costType: CostSalary,
    total: 3000,
    createAt: new Date('2020-10-30T19:50:00.000+09:00'),
    updateAt: new Date('2020-10-30T19:50:00.000+09:00')
  }, {
    id: 6,
    costDescription: 'Marketing Google',
    costType: CostMarketing,
    total: 2000,
    createAt: new Date('2020-10-30T19:50:00.000+09:00'),
    updateAt: new Date('2020-10-30T19:50:00.000+09:00')
  }
];
