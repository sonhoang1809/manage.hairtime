export interface Account {
  id: string;
  email: string;
  photoUrl: string;
  displayName: string;
  token: string;
  phone: string;
  role: string;
  status: number;
  createAt: Date;
}
export interface StatusAccount{
  id: number;
  name: string;
}
export interface Role{
  id: string;
  name: string;
}
export interface AccountStoreOwner extends Account {
  iconStoreUrl: string;

}
