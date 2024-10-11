import { Routes } from '@angular/router';
import { MainContainerComponent } from '../components';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir a 'home' si la URL está vacía
  { path: '**', redirectTo: 'home' },
];
