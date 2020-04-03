import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GatesService {

  constructor(private http: HttpClient) { }
  obtenerTrabajadores() {
    return this.http.get('http://antraxsw.000webhostapp.com/index.php');

  }
  obtenerPorID(id:string) {
    const url = 'http://antraxsw.000webhostapp.com/index.php?id=' + id;
    return this.http.get(url);

  }
}
