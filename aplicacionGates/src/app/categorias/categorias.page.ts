import { Component, OnInit } from '@angular/core';
import { GatesService } from '../services/gates.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  usuarios: any[] = [];
  constructor() { }

  ngOnInit() {
    
  }

}
