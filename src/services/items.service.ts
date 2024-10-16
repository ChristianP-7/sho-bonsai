import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ItemSummary, SearchResult } from '../models/item/item.model';
import { ItemAdapter } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private backendUrl = 'https://sho-bonsai-backend.vercel.app/api/products/';
  private imageProxyUrl =
    'https://sho-bonsai-backend.vercel.app/api/proxy-image';

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

  getImageThroughProxy(itemUrl: string): Observable<Blob> {
    const params = new HttpParams().set('imageUrl', itemUrl);
    return this.http.get(this.imageProxyUrl, {
      params,
      responseType: 'blob',
    });
  }
}
