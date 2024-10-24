import { RouterModule, Routes } from '@angular/router';
import { ItemsContainerComponent } from '../components/store-page/components/items-container';
import { NgModule } from '@angular/core';
import { MainPageComponent } from '../components';
import { StorePageComponent } from '../components/store-page/store-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent, // Cargar MainPageComponent en la raíz
  },
  { path: 'store', component: StorePageComponent }, // Ruta para la tienda
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirige cualquier ruta desconocida a la raíz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
