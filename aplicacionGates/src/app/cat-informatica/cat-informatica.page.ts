import { Component, OnInit } from '@angular/core';
import { GatesService } from '../services/gates.service';

@Component({
  selector: 'app-cat-informatica',
  templateUrl: './cat-informatica.page.html',
  styleUrls: ['./cat-informatica.page.scss'],
})
export class CatInformaticaPage implements OnInit {

  constructor(private userService: GatesService) { }
  usuarios: any[] = [];
  ngOnInit() {
    this.userService.obtenerTrabajadores()
    .subscribe(
      (data) => { // Success
        console.log('resultados', data);
        this.usuarios = data['items'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
