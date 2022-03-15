import { NavController } from '@ionic/angular';
import { DespesaService } from './../../services/domain/despesa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage implements OnInit {


  constructor(
    private despesaService: DespesaService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.despesaService.findAll()
      .subscribe( Response => {
        console.log(Response)
      },
      error => {} )
  }
}
