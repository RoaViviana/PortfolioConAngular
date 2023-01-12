import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AgregarCursosService {

  constructor(private http:HttpClient) { }
  public listarCursos(){
    return this.http.get(`${baserUrl}/cursos/`);
  }

  public agregarCurso(curso:any){
    return this.http.post(`${baserUrl}/cursos/`,curso);
  }
  public eliminarCurso(cursoId:any){
    return this.http.delete(`${baserUrl}/cursos/${cursoId}`);
  }
  public obtenerCurso(cursosId:any){
    return this.http.get(`${baserUrl}/cursos/${cursosId}`);
  }
  public actualizarCurso(curso:any){
    return this.http.put(`${baserUrl}/cursos/`,curso);
  }
}
