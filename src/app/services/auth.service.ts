import { API_CONFIG } from './../../config/api.config';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  authenticate(credencial: CredenciaisDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, 
    credencial,
    {
      observe: 'response',
      responseType: 'text'
    })
  }
}