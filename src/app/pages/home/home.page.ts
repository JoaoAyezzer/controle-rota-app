import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public options: NavigationOptions

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToDespesaForm(): void{
    this.navCtrl.navigateForward('/navigation/despesa/despesa-form')
  }

}