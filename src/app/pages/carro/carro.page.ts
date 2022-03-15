import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  
  click: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  kmControl(){
    this.click = (this.click) ? false : true;
  }


}
