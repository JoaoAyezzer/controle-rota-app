import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnicoDTO } from 'src/app/models/tecnico.dto';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient, private storage: StorageService) { }
  
  findByEmail(email: string): Observable<TecnicoDTO>{
    return this.http.get<TecnicoDTO>(
      `${API_CONFIG.baseUrl}/tecnicos/email?value=${email}`
      );
  }
}
