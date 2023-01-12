import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgregarEstudiosService } from 'src/app/services/agregar-estudios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-estudios',
  templateUrl: './actualizar-estudios.component.html',
  styleUrls: ['./actualizar-estudios.component.css']
})
export class ActualizarEstudiosComponent implements OnInit {

  constructor(private route:ActivatedRoute,private estudiosServicio:AgregarEstudiosService,private router:Router) { }
  estudiosId = 0;
  estudio:any;

  ngOnInit(): void {
    this.estudiosId = this.route.snapshot.params['estudiosId'];
    this.estudiosServicio.obtenerEstudios(this.estudiosId).subscribe(
      (data) =>{
        this.estudio = data;
        console.log(this.estudio);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  public actualizarDatos(){
    this.estudiosServicio.actualizarEstudios(this.estudio).subscribe(
      (data) => {
        Swal.fire('Estudio actualizado','Los estudios han sido actualizados con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/estudios']);
          }
        );
      },
      (error) =>{
        Swal.fire('Error en el sistema','No se han podido actualizar los estudios','error')
        console.log(error);
      }
    )
  }


}
