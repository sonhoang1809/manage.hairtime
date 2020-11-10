import { ManHairCutIcon, ManHairWaxIcon, FaceWashManIcon, ShampooIcon, ShavingIcon, SkinCareIcon } from '../assets/icons/service_icon';
import { ManHairCutService, ManHairWaxService, FaceWashManService, ShampooService, ShavingService, SkinCareService } from './customer_services_data';
import {  OwnerFourRauBarber, OwnerAimShaverBarber, OwnerNormalStore01, OwnerBityBarber, OwnerGudStore01, OwnerGentlemanStore01, OwnerVintageStore01 } from './users_data';
import { ShineBrand, FourRauBrand, AimShaverBrand, BaberBrand, BiAndTyBrand, GudBrand, GentlemanBrand, VintageBrand } from './brands_data';
import { ShineLogo, FourRauLogo } from './../assets/shop_logo';
import { Store, Brand } from './../models/store';

export const CN2FourRauBarber: Store = {
  id: 1,
  address: '4 Tran Quang Khai, Quan 1, Tp. HCM',
  brand: FourRauBrand,
  imgUrl: '',
  name: '4RauBarber Salon 4 Trần Quang Khải',
  numberOfSeat: 2,
  owner: OwnerFourRauBarber,
  status: 0,
  createAt: new Date('2020-10-24T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 5,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 2,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 3,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 3,
    quantity: 0,
    total: 0
  }]
};
export const AimShaverBarber: Store = {
  id: 1,
  address: '6 Nguyễn Văn Linh, Q7, Tp. HCM',
  brand: AimShaverBrand,
  imgUrl: '',
  name: 'Aim Shaver Barber',
  numberOfSeat: 3,
  owner: OwnerAimShaverBarber,
  status: 0,
  createAt: new Date('2020-10-26T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 5,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 2,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 3,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 3,
    quantity: 0,
    total: 0
  }]
};
export const CN1FourRauBarber: Store = {
  id: 1,
  address: '634 Điện Biên Phủ, Q1, Tp. HCM',
  brand: FourRauBrand,
  imgUrl: '',
  name: 'CN1 4Rau Barber',
  numberOfSeat: 2,
  owner: OwnerFourRauBarber,
  status: 1,
  createAt: new Date('2020-10-28T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 5,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 2,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 3,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 3,
    quantity: 0,
    total: 0
  }]
};
export const BaberNormalStore01: Store = {
  id: 1,
  address: '88 Phan Đăng Giảng,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: BaberBrand,
  imgUrl: '',
  name: 'Hoàng Thiên Cắt Tóc Nam',
  numberOfSeat: 3,
  owner: OwnerNormalStore01,
  status: 1,
  createAt: new Date('2020-09-28T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 1,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 2,
    quantity: 0,
    total: 0
  }]
};
export const BiTyStore01: Store = {
  id: 4,
  address: '2 Phan Đăng Giảng,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: BiAndTyBrand,
  imgUrl: '',
  name: 'Bi & Ty',
  numberOfSeat: 12,
  status: 1,
  owner: OwnerBityBarber,
  createAt: new Date('2020-09-30T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 1,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 2,
    quantity: 0,
    total: 0
  }]
};
export const GudStore01: Store = {
  id: 5,
  address: '7 Lê Trọng Tấn,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: GudBrand,
  imgUrl: '',
  name: 'Gud Store CN1',
  numberOfSeat: 12,
  owner: OwnerGudStore01,
  status: 1,
  createAt: new Date('2020-10-25T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 1,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 2,
    quantity: 0,
    total: 0
  }]
};
export const GentlemanStore01: Store = {
  id: 5,
  address: '9 Lê Trọng Tấn,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: GentlemanBrand,
  imgUrl: '',
  name: 'Gentleman Store',
  numberOfSeat: 22,
  owner: OwnerGentlemanStore01,
  status: 1,
  createAt: new Date('2020-10-28T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 1,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 2,
    quantity: 0,
    total: 0
  }]
};
export const VintageStore01: Store = {
  id: 5,
  address: '35 Nguyễn Thị Tú,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: VintageBrand,
  imgUrl: '',
  name: 'Vintage Store',
  numberOfSeat: 22,
  owner: OwnerVintageStore01,
  status: 1,
  createAt: new Date('2020-11-11T19:50:00.000+09:00'),
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 2,
    quantity: 0,
    total: 0
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 1,
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 1,
    quantity: 0,
    total: 0
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 2,
    quantity: 0,
    total: 0
  }]
};
export const Stores: Store[] = [
   CN1FourRauBarber, AimShaverBarber,
  BaberNormalStore01, BiTyStore01, GudStore01,
  GentlemanStore01, CN2FourRauBarber, VintageStore01
]
