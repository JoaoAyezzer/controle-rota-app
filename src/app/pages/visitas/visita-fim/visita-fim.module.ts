import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaFimPageRoutingModule } from './visita-fim-routing.module';

import { VisitaFimPage } from './visita-fim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitaFimPageRoutingModule
  ],
  declarations: [VisitaFimPage]
})
export class VisitaFimPageModule {}
