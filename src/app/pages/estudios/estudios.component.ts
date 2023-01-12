import { Component, OnInit } from '@angular/core';
import { AgregarEstudiosService } from 'src/app/services/agregar-estudios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios:any = [
   
  ]

  constructor(private agregarEstudiosServicio:AgregarEstudiosService) { }

  ngOnInit(): void {
    this.agregarEstudiosServicio.listarEstudios().subscribe(
      (dato:any) => {
        this.estudios = dato;
        console.log(this.estudios);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  eliminarCurso(estudiosId:any){
    Swal.fire({
      title:'Eliminar estudios',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.agregarEstudiosServicio.eliminarEstudios(estudiosId).subscribe(
          (data) =>{
            this.estudios = this. estudios.filter((estudios:any) => estudios.estudiosId != estudiosId);
            Swal.fire('Estudios eliminados','Los estudios han sido eliminados con éxito','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar los estudios','error');
          }
        )
      }
    })
  }
}
