import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaInicioPageRoutingModule } from './visita-inicio-routing.module';

import { VisitaInicioPage } from './visita-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitaInicioPageRoutingModule
  ],
  declarations: [VisitaInicioPage]
})
export class VisitaInicioPageModule {}
