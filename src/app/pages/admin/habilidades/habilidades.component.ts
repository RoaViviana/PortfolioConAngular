import { Component, OnInit } from '@angular/core';
import { AgregarHabilidadService } from 'src/app/services/agregar-habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad:any = []

  constructor(private agregarHabilidadServicio:AgregarHabilidadService) { }

  ngOnInit(): void {
    this.agregarHabilidadServicio.listarHabilidadesBack().subscribe(
      (dato:any) =>{
        this.habilidad = dato;
        console.log(this.habilidad);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error','Error al mostrar habilidad','error');
      }
    )
  }
  eliminarHabilidad(habilidadesId:any){
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
        this.agregarHabilidadServicio.eliminarHabilidad(habilidadesId).subscribe(
          (data) =>{
            this.habilidad = this.habilidad.filter((habilidad:any) => habilidad.habilidadesId != habilidadesId);
            Swal.fire('Habilidad eliminada','La habilidad ha sido eliminada con éxito','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar la habilidad','error');
          }
        )
      }
    })
  }

}
