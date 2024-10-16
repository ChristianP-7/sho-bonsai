import { SearchResult } from '../models/item/item.model';

export const ItemAdapter = (searchResult: SearchResult) => {
  return searchResult.itemSummaries;
};
