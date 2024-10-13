import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ItemsService } from '../../services';
import { AsyncPipe } from '@angular/common';
import { Items } from '../../models/item/items.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prueba-items',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './prueba-items.component.html',
  styleUrl: './prueba-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaItemsComponent {
  private itemsService = inject(ItemsService);
  items$: Observable<Items[]> = this.itemsService.getItems('shoes');

  ngOnInit(): void {
    // Realizamos la búsqueda de ítems con el término 'watch'
    this.items$ = this.itemsService.getItems('shoes');
  }
}
