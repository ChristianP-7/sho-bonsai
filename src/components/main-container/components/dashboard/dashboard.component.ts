import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar';
import { StoreBtnComponent } from './store-btn/store-btn.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BannerComponent,
    WelcomeComponent,
    NavbarComponent,
    StoreBtnComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
