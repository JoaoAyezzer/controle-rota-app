import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitasPage } from './visitas.page';

const routes: Routes = [
  {
    path: '',
    component: VisitasPage
  },
  {
    path: 'visita-inicio',
    loadChildren: () => import('./visita-inicio/visita-inicio.module').then( m => m.VisitaInicioPageModule)
  },
  {
    path: 'visita-fim',
    loadChildren: () => import('./visita-fim/visita-fim.module').then( m => m.VisitaFimPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitasPageRoutingModule {}
