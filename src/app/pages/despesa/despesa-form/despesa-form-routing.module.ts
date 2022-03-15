import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesaFormPage } from './despesa-form.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaFormPageRoutingModule {}
