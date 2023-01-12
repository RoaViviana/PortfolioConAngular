import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AgregarEstudiosService {

  constructor(private http:HttpClient) { }
  public listarEstudios(){
    return this.http.get(`${baserUrl}/estudios/`);
  }

  public agregarEstudios(estudios:any){
    return this.http.post(`${baserUrl}/estudios/`,estudios);
  }
  public eliminarEstudios(estudiosId:any){
    return this.http.delete(`${baserUrl}/estudios/${estudiosId}`);
  }
  public obtenerEstudios(estudiosId:any){
    return this.http.get(`${baserUrl}/estudios/${estudiosId}`);
  }
  public actualizarEstudios(estudios:any){
    return this.http.put(`${baserUrl}/estudios/`,estudios);
  }
}
