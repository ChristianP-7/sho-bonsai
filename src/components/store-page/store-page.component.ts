import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OfferBarComponent } from '../main-page/components/main-container/components/offer-bar/offer-bar.component';
import { StoreNavbarComponent } from './components/store-navbar/store-navbar.component';
import { ItemsContainerComponent } from './components/items-container/items-container.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [OfferBarComponent, StoreNavbarComponent, ItemsContainerComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorePageComponent {}
