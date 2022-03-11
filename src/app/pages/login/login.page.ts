import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  forgotPassword: boolean = false;

  public credenciais: CredenciaisDTO = {
    email: '',
    senha: ''
  };

  constructor(
    private authService: AuthService,
    private navCrl: NavController
    ) { }

  ngOnInit() {
  }
  login(){
    this.authService.authenticate(this.credenciais)
    .subscribe(
      Response => {
        this.authService.successfulLogin(Response.headers.get('Authorization'));
        this.navCrl.navigateForward('navigation')
      },
      error => {}
    )
    
  }
  resetPassword(){

  }
  forgot(){
    this.forgotPassword = (this.forgotPassword) ? false : true

  }

}
