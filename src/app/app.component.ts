import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from '../components';
import { NewArrivalsComponent } from '../components/new-arrivals/new-arrivals.component';
import { PruebaItemsComponent } from '../components/prueba-items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContainerComponent,
    NewArrivalsComponent,
    PruebaItemsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'E-commerce';
}
