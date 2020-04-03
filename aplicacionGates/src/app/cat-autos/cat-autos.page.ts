import { Component, OnInit } from '@angular/core';
import { GatesService } from '../services/gates.service';

@Component({
  selector: 'app-cat-autos',
  templateUrl: './cat-autos.page.html',
  styleUrls: ['./cat-autos.page.scss'],
})
export class CatAutosPage implements OnInit {

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
