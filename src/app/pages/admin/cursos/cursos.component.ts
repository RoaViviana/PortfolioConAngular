import { Component, OnInit } from '@angular/core';
import { AgregarCursosService } from 'src/app/services/agregar-cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curso:any = [
  
  ]

  constructor(private agregarCursoServicio:AgregarCursosService) { }

  ngOnInit(): void {
    this.agregarCursoServicio.listarCursos().subscribe(
      (dato:any) => {
        this.curso = dato;
        console.log(this.curso);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error','Error al cargar los cursos','error');
      }
    )
  }
  eliminarCurso(cursosId:any){
    Swal.fire({
      title:'Eliminar curso',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.agregarCursoServicio.eliminarCurso(cursosId).subscribe(
          (data) =>{
            this.curso = this.curso.filter((curso:any) => curso.cursosId != cursosId);
            Swal.fire('Curso eliminado','El curso ha sido eliminado con éxito','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el curso','error');
          }
        )
      }
    })
  }

}
