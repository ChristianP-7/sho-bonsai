import { HeaderInfo } from './api.model';

export interface SearchResult {
  info: HeaderInfo;
  itemSummaries: ItemSummary[];
}

export interface ItemSummary {
  itemId: string;
  title: string;
  itemGroupHref?: string;
  leafCategoryIds: string[];
  categories: Category[];
  image: Image;
  price: Price;
  itemGroupType?: string;
  itemHref: string;
  seller: Seller;
  thumbnailImages: Image[];
  shippingOptions: ShippingOption[];
  buyingOptions: string[];
  itemWebUrl: string;
  itemLocation: ItemLocation;
  additionalImages: Image[];
  adultOnly: boolean;
  legacyItemId: string;
  availableCoupons: boolean;
  itemCreationDate: string;
  topRatedBuyingExperience: boolean;
  priorityListing: boolean;
  listingMarketplaceId: string;
}

export interface Category {
  categoryId: string;
  categoryName: string;
}

export interface Image {
  imageUrl: string;
}

export interface Price {
  value: string;
  currency: string;
}

export interface Seller {
  username: string;
  feedbackPercentage: string;
  feedbackScore: number;
}

export interface ShippingOption {
  shippingCostType: string;
  shippingCost: Price;
}

export interface ItemLocation {
  postalCode: string;
  country: string;
}
