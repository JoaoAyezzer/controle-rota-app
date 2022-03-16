import { EmailDTO } from './../models/email.dto';
import { StorageService } from './storage.service';
import { LocalUser } from './../models/local_user';
import { API_CONFIG } from './../../config/api.config';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  jwtPayload: JwtPayload = {
    sub: '',
    exp: null
  }

  constructor(
    private http: HttpClient,
    private storage: StorageService) { }

  authenticate(credencial: CredenciaisDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, 
    credencial,
    {
      observe: 'response',
      responseType: 'text'
    })
  }

  resetPassword(email: EmailDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/auth/forgot`,
     email,
     {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authorizationValue: string){
    let tok = authorizationValue.substring(7);
    this.jwtPayload = jwt_decode(tok)
    let user : LocalUser = {
      token: tok,
      email!: this.jwtPayload.sub
    };
    this.storage.setLocalUser(user);
  }

  logout(){
    this.storage.setLocalUser(null);
  }
}
