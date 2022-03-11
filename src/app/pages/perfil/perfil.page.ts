import { TecnicoDetailDTO } from 'src/app/models/tecnico.detail.dto';
import { TecnicoService } from './../../services/domain/tecnico.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit{

  tecnico: TecnicoDetailDTO = {
    id: '',
    nome: '',
    email: '',
    tipoTecnico: '',
    telefones: [],
    visitas: []
  };

  ngOnInit() {
  }

  constructor(
    private storage: StorageService,
    private tecnicoService: TecnicoService
  ) { }

  ionViewDidEnter(){
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.tecnicoService.findByEmail(localUser.email)
        .subscribe( response => {
          this.tecnico = response;
          console.log(this.tecnico);
        },
        error => {});  
    }
  }
}
