import { Component, OnInit } from '@angular/core';
import { AgregarExperienciaServicioService } from 'src/app/services/agregar-experiencia-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias:any = [
   
  ]

  constructor(private experienciaServicio:AgregarExperienciaServicioService) { }

  ngOnInit(): void {
    this.experienciaServicio.listarExperiencias().subscribe(
      (dato:any) => {
        this.experiencias = dato;
        console.log(this.experiencias);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error','Error al mostrar experiencias','error');
      }
    )
  }
  eliminarExperiencia(experienciaId:any){
    Swal.fire({
      title:'Eliminar experiencia',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.experienciaServicio.eliminarExperiencia(experienciaId).subscribe(
          (data) =>{
            this.experiencias = this.experiencias.filter((experiencias:any) => experiencias.experienciaId != experienciaId);
            Swal.fire('Experiencia eliminada','La experiencia ha sido eliminada con éxito','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el examen','error');
          }
        )
      }
    })
  }
}
