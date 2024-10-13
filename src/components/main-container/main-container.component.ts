import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OfferBarComponent } from './components/offer-bar/offer-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BannerComponent } from './components/dashboard/banner/banner.component';
import { NavbarComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    AsyncPipe,
    OfferBarComponent,
    DashboardComponent,
    BannerComponent,
    NavbarComponent,
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {}
