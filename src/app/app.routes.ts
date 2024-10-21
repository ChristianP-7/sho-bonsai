import { RouterModule, Routes } from '@angular/router';
import { ItemsContainerComponent } from '../components/store-page/items-container/components';
import { NgModule } from '@angular/core';
import { MainPageComponent } from '../components';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent, // Cargar MainPageComponent en la raíz
  },
  { path: 'store', component: ItemsContainerComponent }, // Ruta para la tienda
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirige cualquier ruta desconocida a la raíz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
