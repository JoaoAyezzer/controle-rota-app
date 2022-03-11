import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.navigateTo();
  }

  navigateTo(){
    setTimeout( () => {
      this.navCtrl.navigateRoot('login')
    }, 2000);
  }

}
