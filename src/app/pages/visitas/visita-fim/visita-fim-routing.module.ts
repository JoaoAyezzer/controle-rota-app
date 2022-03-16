import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaFimPage } from './visita-fim.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaFimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaFimPageRoutingModule {}
