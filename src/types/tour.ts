import type { IDateValue } from './common';
import type { IAuthorProps } from './author';
import type { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITourProps = {
  id: string;
  slug: string;
  price: number;
  heroUrl: string;
  coverUrl: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  services: string[];
  description: string;
  languages: string[];
  ratingNumber: number;
  totalReviews: number;
  highlights: string[];
  createdAt: IDateValue;
  tourGuide?: IAuthorProps;
  shareLinks: ISocialLinks;
  available: {
    start: IDateValue;
    end: IDateValue;
  };
  program: {
    label: string;
    text: string;
  }[];
};

export type ITourCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      ccv: string;
      number: string;
      holder: string;
      expired: string;
    };
  };
};
