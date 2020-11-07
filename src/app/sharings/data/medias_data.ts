import { NEWSPAPERMEDIA, TIVIMEDIA, SOCIALMEDIA, LEAFLETMEDIA } from '../assets/icons/media_icon';
import { MarketingMedia } from './../models/social_marketing';

export const NewpaperMedia: MarketingMedia = {
  id: 1,
  iconUrl: NEWSPAPERMEDIA,
  name: 'Newspaper',
  cost: 300000
};

export const TiviMedia: MarketingMedia = {
  id: 2,
  iconUrl: TIVIMEDIA,
  name: 'Tivi',
  cost: 300000
};

export const SocialNetworkMedia: MarketingMedia = {
  id: 3,
  iconUrl: SOCIALMEDIA,
  name: 'Social Network',
  cost: 500000
};

export const LeafletMedia: MarketingMedia = {
  id: 4,
  iconUrl: LEAFLETMEDIA,
  name: 'Leaflet',
  cost: 3000
};
