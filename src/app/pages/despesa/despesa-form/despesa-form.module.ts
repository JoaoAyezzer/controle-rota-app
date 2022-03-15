import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespesaFormPageRoutingModule } from './despesa-form-routing.module';

import { DespesaFormPage } from './despesa-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespesaFormPageRoutingModule
  ],
  declarations: [DespesaFormPage]
})
export class DespesaFormPageModule {}
