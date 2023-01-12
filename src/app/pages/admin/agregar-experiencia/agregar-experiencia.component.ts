import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgregarExperienciaServicioService } from 'src/app/services/agregar-experiencia-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  experiencia ={
    puesto:'',
    empresa:'',
    fechas:'',
    descripcion:''
  }

  constructor(private agregarExperienciaService:AgregarExperienciaServicioService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.experiencia.puesto.trim() == '' || this.experiencia.puesto == null){
      this.snack.open("El puesto es requerido",'',{
        duration:3000
      })
      return ;
    }
    this.agregarExperienciaService.agregarExperiencia(this.experiencia).subscribe(
      (dato:any) =>{
        this.experiencia.puesto = '';
        this.experiencia.empresa = '';
        this.experiencia.fechas = '';
        this.experiencia.descripcion = '';
        Swal.fire('Experiencia agregada','Experiencia agregada','success');
        this.router.navigate(['/admin'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar Experiencia','error');
      }
    )
  }
}
