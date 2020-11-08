import { ShineLogo, AimShaverLogo, GudLogo, GentlemanLogo, VintageLogo } from './../assets/shop_logo';
import { DefaultAvatar, Avatar4RauOwner } from './../assets/avatar';
import { Account } from './../models/account';

export const Admin01: Account = {
  id: '3192014117691615',
  displayName: "Hoang Son",
  email: "sonhoang1809@gmail.com",
  phone: '0789008130',
  photoUrl: "https://graph.facebook.com/3192014117691615/picture?type=normal",
  role: 'ADMIN',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};

export const Admin02: Account = {
  id: '3192014117691616',
  displayName: "Minh Vo",
  email: "minhvo.developer@gmail.com",
  phone: '0779913870',
  photoUrl: DefaultAvatar,
  role: 'ADMIN',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};

export const Owner30ShineSalon4: Account = {
  id: '1',
  displayName: 'Hoang Long',
  email: 'hoanglong@30shine.com',
  phone: '0123456789',
  photoUrl: ShineLogo,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};

export const OwnerBityBarber: Account = {
  id: '2',
  displayName: 'Tran Van Hoang',
  email: 'bitywork@gmail.com',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const OwnerAimShaverBarber: Account = {
  id: '3',
  displayName: 'Johnny Dang',
  email: 'johnnydang@gmail.com',
  phone: '0777713870',
  photoUrl: AimShaverLogo,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const OwnerFourRauBarber: Account = {
  id: '4',
  displayName: 'Hà Hiền',
  email: '4raubarbershop@gmail.com',
  phone: '0933945339',
  photoUrl: Avatar4RauOwner,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const OwnerNormalStore01: Account = {
  id: '5',
  displayName: 'Hoàng Thiên',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const OwnerGudStore01: Account = {
  id: '6',
  displayName: 'Minh Nhật',
  email: '',
  phone: '0123456789',
  photoUrl: GudLogo,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const OwnerGentlemanStore01: Account = {
  id: '7',
  displayName: 'Trần Văn Cường',
  email: '',
  phone: '0123456789',
  photoUrl: GentlemanLogo,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const OwnerVintageStore01: Account = {
  id: '7',
  displayName: 'Võ Trung Hiếu',
  email: '',
  phone: '0123456789',
  photoUrl: VintageLogo,
  role: 'OWNER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};

export const Customer01: Account = {
  id: '25',
  displayName: 'Van Phuong Dat',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Customer02: Account = {
  id: '26',
  displayName: 'Huynh Thanh Tien',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Customer03: Account = {
  id: '27',
  displayName: 'Hoang Phuc Huy',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Customer04: Account = {
  id: '27',
  displayName: 'Hoang Anh Thang',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Customer05: Account = {
  id: '31',
  displayName: 'Le Hieu',
  email: '',
  phone: '0144456789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Customer06: Account = {
  id: '32',
  displayName: 'Le Hong Nguyen',
  email: '',
  phone: '0777776789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Guest01: Account = {
  id: '28',
  displayName: 'Nguyen Thanh Tu',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Guest02: Account = {
  id: '29',
  displayName: 'Lê Hiếu',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const Guest03: Account = {
  id: '30',
  displayName: 'Nguyễn Minh Tuấn',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: '',
  status: 1,
  createAt: new Date('2020-10-30T19:50:00.000+09:00')
};
export const AccountUsers: Account[] = [
  Admin01, Admin02,
  OwnerBityBarber,
  OwnerFourRauBarber, OwnerAimShaverBarber,
  OwnerVintageStore01, OwnerGentlemanStore01,
  OwnerGudStore01, OwnerNormalStore01,
  Customer01, Customer02, Customer03, Customer04,
  Customer05, Customer06
];
