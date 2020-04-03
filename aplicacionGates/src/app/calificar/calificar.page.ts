import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GatesService } from '../services/gates.service';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {
  valorID = null;
  public folder: string;
  usuarios: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, public toastController: ToastController, private userService: GatesService
    , private http: HttpClient) { }

  ngOnInit() {
    this.valorID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.valorID);
    
    this.userService.obtenerPorID(this.valorID)
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

  async calificar(valor: string){
    const formData = new FormData();
      
    formData.append('id', this.valorID);
    formData.append('calificacion', valor);
    (await this.insertar(formData)).subscribe();
  }

  async insertar(data: FormData){
    const toast =  await this.toastController.create({
      message: 'Calificacion actualizada!.',
      duration: 2000
    });
    toast.present();
    return this.http.post('https://antraxsw.000webhostapp.com/actualizarCalificacion.php', data);
    
  }


}
