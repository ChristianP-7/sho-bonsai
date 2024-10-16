import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemSummary } from '../../models/item/item.model';
import { ItemsService } from '../../services';
import { ItemCardComponent } from './components/item-card/item-card.component';

@Component({
  selector: 'app-items-container',
  standalone: true,
  imports: [AsyncPipe, ItemCardComponent],
  templateUrl: './items-container.component.html',
  styleUrl: './items-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsContainerComponent {
  private itemsService = inject(ItemsService);
  items$: Observable<ItemSummary[]> =
    this.itemsService.getItemsByCategory('/181003&limit=3');
}
