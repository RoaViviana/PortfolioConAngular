import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AgregarExperienciaServicioService {

  constructor(private http:HttpClient) { }

  public listarExperiencias(){
    return this.http.get(`${baserUrl}/experiencia/`);
  }

  public agregarExperiencia(experiencia:any){
    return this.http.post(`${baserUrl}/experiencia/`,experiencia);
  }

  public eliminarExperiencia(experienciaId:any){
    return this.http.delete(`${baserUrl}/experiencia/${experienciaId}`);
  }
}
