import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaInicioPage } from './visita-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaInicioPageRoutingModule {}
