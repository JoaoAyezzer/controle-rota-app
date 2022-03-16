import { Component, OnInit } from '@angular/core';
import { NavController, IonNav } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs-navigation.page.html',
  styleUrls: ['./tabs-navigation.page.scss'],
})
export class TabsNavigationPage implements OnInit {

  constructor(private navCrl: NavController) { }

  
  ngOnInit() {
    
  }
  gotoHome(){
    // this.ionNav.push
  }


}
