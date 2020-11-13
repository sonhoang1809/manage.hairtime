import { StatusAccount } from './../models/account';

export const NotVerifyYetAccount: StatusAccount = {
  id: 0,
  name: 'Not verified'
};


export const WorkingAccount: StatusAccount = {
  id: 1,
  name: 'Enable'
};

export const DisableAccount: StatusAccount = {
  id: 2,
  name: 'Disable'
};


export const StatusAccounts: StatusAccount[] = [
  WorkingAccount, DisableAccount
];
