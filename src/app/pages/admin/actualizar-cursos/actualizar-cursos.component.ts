import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgregarCursosService } from 'src/app/services/agregar-cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cursos',
  templateUrl: './actualizar-cursos.component.html',
  styleUrls: ['./actualizar-cursos.component.css']
})
export class ActualizarCursosComponent implements OnInit {

  constructor(private route:ActivatedRoute,private cursosServicio:AgregarCursosService,private router:Router) { }
  cursosId = 0;
  curso:any;

  ngOnInit(): void {
    this.cursosId = this.route.snapshot.params['cursosId'];
    this.cursosServicio.obtenerCurso(this.cursosId).subscribe(
      (data) =>{
        this.curso = data;
        console.log(this.curso);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  public actualizarDatos(){
    this.cursosServicio.actualizarCurso(this.curso).subscribe(
      (data) => {
        Swal.fire('Curso actualizado','El curso ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/cursos']);
          }
        );
      },
      (error) =>{
        Swal.fire('Error en el sistema','No se ha podido actualizar el curso','error')
        console.log(error);
      }
    )
  }

}
