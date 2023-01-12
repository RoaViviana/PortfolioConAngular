import { Component, OnInit } from '@angular/core';
import { AgregarEstudiosService } from 'src/app/services/agregar-estudios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregar-estudios',
  templateUrl: './agregar-estudios.component.html',
  styleUrls: ['./agregar-estudios.component.css']
})
export class AgregarEstudiosComponent implements OnInit {
  estudios ={
    institucion:'',
    carrera:'',
    fechas:'',
  }

  constructor(private agregarEstudiosServicio:AgregarEstudiosService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.estudios.institucion.trim() == '' || this.estudios.institucion == null){
      this.snack.open("La institución es requerida",'',{
        duration:3000
      })
      return ;
    }
    this.agregarEstudiosServicio.agregarEstudios(this.estudios).subscribe(
      (dato:any) =>{
        this.estudios.carrera = '';
        this.estudios.institucion = '';
        this.estudios.fechas = '';
        Swal.fire('Estudios agregados','Estudios agregados con éxito','success');
        this.router.navigate(['/admin/estudios'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar Estudios','error');
      }
    )
  }

}
