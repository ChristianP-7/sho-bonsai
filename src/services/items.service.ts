import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ItemSummary, SearchResult } from '../models/item/item.model';
import { ItemAdapter } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private backendUrl = 'https://sho-bonsai-backend.vercel.app/api/products/';

  constructor(private http: HttpClient) {}

  getItemsByCategory(categoryId: string): Observable<ItemSummary[]> {
    const url = `${this.backendUrl}${categoryId}`;

    return this.http
      .get<SearchResult>(url)
      .pipe(map((itemSummaries) => ItemAdapter(itemSummaries)));
  }

  getItemInformation(url: string): Observable<ItemSummary> {
    return this.http.get<ItemSummary>(url);
  }
}
