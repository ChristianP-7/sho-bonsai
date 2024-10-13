export interface Items {
  deals: Deal[];
}

export interface Deal {
  groupId: string;
  title: Title;
  imageLink: string;
  minPrice: Price;
  maxPrice: Price;
  categoryIdentifier: string;
  quantitySold: number;
  discount: boolean;
  originalPrice: Price;
  quantityLimitPerBuyer: number;
  priceDisplayCondition: string;
  itemGroup: string;
  dealEndtime: DealEndtime;
}

export interface Title {
  content: string;
}

export interface Price {
  value: number;
  currency: string;
}

export interface DealEndtime {
  value: string; // Fechas en formato ISO 8601
  formattedValue: string;
}
