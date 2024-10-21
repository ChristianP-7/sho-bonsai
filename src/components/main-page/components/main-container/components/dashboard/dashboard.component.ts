import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar';
import { StoreBtnComponent } from './components/store-btn/store-btn.component';

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
