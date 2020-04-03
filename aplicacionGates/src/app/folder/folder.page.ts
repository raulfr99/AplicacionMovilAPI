import { GatesService } from './../services/gates.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  usuarios: any[] = [];
  valorCalificar = 'Hola';
  selectedFile: ImageSnippet;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private userService: GatesService) { }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
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
  print(){
    console.log("BORICUA")
  }

  
  
}
