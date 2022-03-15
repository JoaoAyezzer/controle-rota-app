import { NavController } from '@ionic/angular';
import { TecnicoDTO } from 'src/app/models/tecnico.dto';
import { TecnicoService } from './../../services/domain/tecnico.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit{

  tecnico: TecnicoDTO = {
    id: '',
    nome: '',
    email: '',
    tipoTecnico: '',
    telefones: []
  };

  ngOnInit() {
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

  constructor(
    private storage: StorageService,
    private tecnicoService: TecnicoService,
    private navCrl: NavController
  ) { }

  logout(): void{
    this.storage.setLocalUser(null);
    this.navCrl.navigateRoot("/")
  }


}
