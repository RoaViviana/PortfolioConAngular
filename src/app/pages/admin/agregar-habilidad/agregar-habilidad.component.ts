import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgregarHabilidadService } from 'src/app/services/agregar-habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {

  habilidad= {
      Logo:'',
      habilidadesNombre:'', 
      habilidadesCategoria:'',
      habilidadesStatus:''
    }
  
  constructor(private agregarHabilidadServicio:AgregarHabilidadService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.habilidad.habilidadesNombre.trim() == '' || this.habilidad.habilidadesNombre == null){
      this.snack.open("El nombre de la habilidad es requerido",'',{
        duration:3000
      })
      return ;
    }
    this.agregarHabilidadServicio.agregarHabilidades(this.habilidad).subscribe(
      (dato:any) =>{
        this.habilidad.Logo = '';
        this.habilidad.habilidadesNombre = '';
        this.habilidad.habilidadesCategoria = '';
        this.habilidad.habilidadesStatus= '';
        Swal.fire('Habilidad agregada','Habilidad agregada con éxito','success');
        this.router.navigate(['/admin/habilidades'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar Experiencia','error');
      }
    )
  }

}
