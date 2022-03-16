import { EmailDTO } from './../../models/email.dto';
import { AlertService } from './../../services/alert.service';
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
  public email: EmailDTO = {
    email:''
  }
  constructor(
    private authService: AuthService,
    private navCrl: NavController,
    private alertService: AlertService
    ) { }

  ngOnInit() {
  }
  login(){
    console.log(this.credenciais)
    console.log(this.email)

    this.authService.authenticate(this.credenciais)
    .subscribe(
      Response => {
        this.authService.successfulLogin(Response.headers.get('Authorization'));
        this.navCrl.navigateForward('navigation')
      },
      error => {
        this.alertService.presentAlert(
         'Falha de autenticação', 
         'Usuario ou senha invalidos', 
         'Verifique o usuario e senha e tente novamente', 
         true 
        );
      }
    )
    
  }
  resetPassword(){
    this.email.email = this.credenciais.email;
    this.authService.resetPassword(this.email)
      .subscribe(
        response => {
          this.forgot()
          this.alertService.presentAlert(
            'Redefinição de senha', 
            'Email enviado com sucesso', 
            'Verifique a senha temporaria enviada por email.', 
            true 
           );
        },
        error => {
          console.log(this.credenciais.email)
          this.alertService.presentAlert(
            'Falha no envio de email', 
            'Email informado invalido', 
            'Verifique o email e tente novamente!', 
            true 
           );
        }
      )

  }

  forgot(){
    this.forgotPassword = (this.forgotPassword) ? false : true

  }

}
