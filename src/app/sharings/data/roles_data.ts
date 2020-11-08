import { Role } from './../models/account';

export const AdminRole: Role = {
  id: '1',
  name: 'Administrator'
};


export const OwnerStoreRole: Role = {
  id: '2',
  name: 'Store Owner'
};

export const StaffStoreRole: Role = {
  id: '3',
  name: 'Store Staff'
};

export const CustomerRole: Role = {
  id: '4',
  name: 'Customer'
};

export const Roles = [
  AdminRole, OwnerStoreRole, StaffStoreRole, CustomerRole
];
