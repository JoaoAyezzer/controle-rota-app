import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnicoDetailDTO } from 'src/app/models/tecnico.detail.dto';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient, private storage: StorageService) { }
  
  findByEmail(email: string): Observable<TecnicoDetailDTO>{

    let token = this.storage.getLocalUser().token;
    let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

    return this.http.get<TecnicoDetailDTO>(
      `${API_CONFIG.baseUrl}/tecnicos/email?value=${email}`,
      {'headers': authHeader}
      );
  }
}
