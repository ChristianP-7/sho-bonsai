// /src/app/services/items.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Items } from '../models/item/items.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private apiUrl = 'https://tu-proyecto.vercel.app/api/ebay-items'; // URL a la API en Vercel

  constructor(private http: HttpClient) {}

  getItems(query: string): Observable<Items[]> {
    // En este caso no necesitas enviar el token, ya que lo maneja la API proxy
    const url = `${this.apiUrl}?q=${query}`;

    return this.http.get<{ itemSummaries: Items[] }>(url).pipe(
      map((response) => response.itemSummaries || []), // Retorna un array vacío si no hay items
      catchError((error) => {
        console.error('Error fetching items:', error);
        return of([]); // Maneja errores devolviendo un array vacío
      })
    );
  }
}
