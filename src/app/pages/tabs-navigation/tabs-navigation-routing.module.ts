import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNavigationPage } from './tabs-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: TabsNavigationPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'agendamento',
        loadChildren: () => import('../agendamento/agendamento.module').then(m => m.AgendamentoPageModule)
      },
      {
        path: 'carro',
        loadChildren: () => import('../carro/carro.module').then(m => m.CarroPageModule)
      },
      {
        path: 'despesa',
        loadChildren: () => import('../despesa/despesa.module').then(m => m.DespesaPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}