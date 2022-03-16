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
        path: 'visitas',
        loadChildren: () => import('../visitas/visitas.module').then(m => m.VisitasPageModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
