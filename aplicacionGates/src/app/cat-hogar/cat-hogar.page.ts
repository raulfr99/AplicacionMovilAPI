import { Component, OnInit } from '@angular/core';
import { GatesService } from '../services/gates.service';

@Component({
  selector: 'app-cat-hogar',
  templateUrl: './cat-hogar.page.html',
  styleUrls: ['./cat-hogar.page.scss'],
})
export class CatHogarPage implements OnInit {

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
