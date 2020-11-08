import { StatusAccount } from './../models/account';

export const NotVerifyYetAccount: StatusAccount = {
  id: 0,
  name: 'Not verified'
};


export const WorkingAccount: StatusAccount = {
  id: 1,
  name: 'Working'
};

export const DisableAccount: StatusAccount = {
  id: 2,
  name: 'Store Staff'
};


export const StatusAccounts :StatusAccount[]  = [
  NotVerifyYetAccount, WorkingAccount, DisableAccount
];
