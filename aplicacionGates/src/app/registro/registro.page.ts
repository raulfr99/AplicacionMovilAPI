import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

import { ToastController } from '@ionic/angular';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public folder: string;
  md5 = new Md5();
  selectedFile: ImageSnippet;
  imgEstado = false;
  imagenDefault = 'imgDefault.png';
  todo = {
    nombre: '',
    apellidos: '',
    numtelefono: '',
    contrasena: '',
    descripcion:'',
    imagen:'',
    edad:'',
    oficio:''
    
  };
  constructor(public toastController: ToastController, private http: HttpClient) { }
  
  async ngOnInit() {
    
  }
  
  
  processFile(imageInput: any) {
    this.imgEstado=true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      this.todo.imagen = this.selectedFile.file.name;
    });

    reader.readAsDataURL(file);
  }
   uploadImage(image: File) {
    const formData = new FormData();

    formData.append('imagen', image);
   
   
    return this.http.post('https://antraxsw.000webhostapp.com/subirImagen.php', formData);
  }

    async registroTrabajador(){
      const formData = new FormData();
      
      formData.append('nombre', this.todo.nombre);
      formData.append('apellidos', this.todo.apellidos);
      formData.append('numtelefono', this.todo.numtelefono);
      this.md5.appendStr(this.todo.contrasena)
      this.md5.end()
      formData.append('contrasena', this.todo.contrasena);
      if(this.imgEstado==true){
        this.uploadImage(this.selectedFile.file).subscribe();
        this.todo.imagen=this.selectedFile.file.name;
      }else{
        this.todo.imagen = 'imgDefault.png';
      }
      formData.append('imagen',this.todo.imagen);
      formData.append('descripcion',this.todo.descripcion);
      formData.append('oficio', this.todo.oficio);
      formData.append('edad', this.todo.edad);
     
      
      (await this.registrar(formData)).subscribe();
     

    }
    async registrar(data: FormData){
      const toast =  await this.toastController.create({
        message: 'Registrado correctamente!.',
        duration: 2000
      });
      toast.present();
      return this.http.post('https://antraxsw.000webhostapp.com/add.php', data);
      
    }
    
}
