import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesaPage } from './despesa.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaPage
  },
  {
    path: 'despesa-form',
    loadChildren: () => import('./despesa-form/despesa-form.module').then( m => m.DespesaFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaPageRoutingModule {}
