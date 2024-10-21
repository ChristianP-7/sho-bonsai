import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemSummary } from '../../../../models/item/item.model';
import { ItemsService } from '../../../../services';
import { ItemCardComponent } from './item-card/item-card.component';
import { NavbarComponent } from '../../../main-page/components/main-container/components/dashboard/components/navbar/navbar.component';
import { OfferBarComponent } from '../../../main-page/components/main-container/components/offer-bar/offer-bar.component';

@Component({
  selector: 'app-items-container',
  standalone: true,
  imports: [AsyncPipe, ItemCardComponent, NavbarComponent, OfferBarComponent],
  templateUrl: './items-container.component.html',
  styleUrl: './items-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsContainerComponent {
  private itemsService = inject(ItemsService);
  items$: Observable<ItemSummary[]> =
    this.itemsService.getItemsByCategory('181003');
}
