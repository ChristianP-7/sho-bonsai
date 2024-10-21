import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from '../components';
import { NewArrivalsComponent } from '../components/main-page/components/new-arrivals/new-arrivals.component';
import { ItemsContainerComponent } from '../components/store-page/items-container/components';
import { NavbarComponent } from '../components/main-page/components/main-container/components/dashboard/components/navbar/navbar.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { HomeComponent } from '../components/main-page/components/main-container/components/dashboard/components/navbar/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContainerComponent,
    NewArrivalsComponent,
    ItemsContainerComponent,
    NavbarComponent,
    MainPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'E-commerce';
}
