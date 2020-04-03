import { Component, OnInit } from '@angular/core';
import { GatesService } from '../services/gates.service';

@Component({
  selector: 'app-cat-tareas',
  templateUrl: './cat-tareas.page.html',
  styleUrls: ['./cat-tareas.page.scss'],
})
export class CatTareasPage implements OnInit {

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
