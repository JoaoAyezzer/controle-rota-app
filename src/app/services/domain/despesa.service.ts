import { Observable } from 'rxjs';
import { API_CONFIG } from './../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DespesaReadDTO } from 'src/app/models/despesa.read.dto';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<DespesaReadDTO[]>{
    return this.http.get<DespesaReadDTO[]>(`${API_CONFIG.baseUrl}/despesas`)
  }
}
