import { AuthService } from 'src/app/services/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credenciais: CredenciaisDTO = {
    email: '',
    senha: ''
  };

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.authenticate(this.credenciais)
    .subscribe(
      Response => {
        this.authService.successfulLogin(Response.headers.get('Authorization'));
      },
      error => {}
    );
  }

}
