import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AgregarHabilidadService {

  constructor(private http:HttpClient) { }

  public listarHabilidadesBack(){
    return this.http.get(`${baserUrl}/habilidades/`);
  }
  public agregarHabilidades(habilidades:any){
    return this.http.post(`${baserUrl}/habilidades/`,habilidades);
  }
  public eliminarHabilidad(habilidadesId:any){
    return this.http.delete(`${baserUrl}/habilidades/${habilidadesId}`);
  }
}
