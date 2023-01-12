import { Component, OnInit } from '@angular/core';
import { AgregarCursosService } from 'src/app/services/agregar-cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  curso = 
    {
      institucionCurso: '',
      descripcionCurso: '',
      estadoCurso: ''
    }
  

  constructor(private agregarCursosServicio:AgregarCursosService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.agregarCursosServicio.agregarCurso(this.curso).subscribe(
      (dato:any) =>{
        this.curso.institucionCurso = '';
        this.curso.descripcionCurso = '';
        this.curso.estadoCurso = '';
        Swal.fire('Curso agregado','Curso agregado con éxito','success');
        this.router.navigate(['/admin/cursos'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar Experiencia','error');
      }
    )
  }


}
