import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainContainerComponent, NewArrivalsComponent } from './components';
import { StoreBtnComponent } from './components/main-container/components/dashboard/components/store-btn/store-btn.component';
import { WelcomeComponent } from './components/main-container/components/dashboard/components/welcome/welcome.component';
import { BannerComponent } from './components/main-container/components/dashboard/components/banner/banner.component';
import { NavbarComponent } from './components/main-container/components/dashboard/components/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MainContainerComponent,
    NewArrivalsComponent,
    StoreBtnComponent,
    WelcomeComponent,
    BannerComponent,
    NavbarComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
