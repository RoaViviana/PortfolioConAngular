import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { ExperienciaComponent } from './pages/admin/experiencia/experiencia.component';
import { CursosComponent } from './pages/admin/cursos/cursos.component';
import { HabilidadesComponent } from './pages/admin/habilidades/habilidades.component';
import { ProyectosComponent } from './pages/admin/proyectos/proyectos.component';
import { ContactoComponent } from './pages/admin/contacto/contacto.component';
import { AgregarExperienciaComponent } from './pages/admin/agregar-experiencia/agregar-experiencia.component';
import { AgregarEstudiosComponent } from './pages/admin/agregar-estudios/agregar-estudios.component';
import { AgregarCursoComponent } from './pages/admin/agregar-curso/agregar-curso.component';
import { AgregarHabilidadComponent } from './pages/admin/agregar-habilidad/agregar-habilidad.component';
import { ActualizarCursosComponent } from './pages/admin/actualizar-cursos/actualizar-cursos.component';
import { ActualizarEstudiosComponent } from './pages/admin/actualizar-estudios/actualizar-estudios.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'estudios',
        component:EstudiosComponent
      },
      {
        path:'',
        component:ExperienciaComponent
      },
      {
        path:'cursos',
        component:CursosComponent
      },
      {
        path:'habilidades',
        component:HabilidadesComponent
      },
      {
        path:'proyectos',
        component:ProyectosComponent
      },
      {
        path:'contacto',
        component:ContactoComponent
      },
      {
        path:'agregarExperiencia',
        component:AgregarExperienciaComponent
      },
      {
        path:'agregarEstudios',
        component:AgregarEstudiosComponent
      },
      {
        path:'agregarCurso',
        component:AgregarCursoComponent
      },
      {
        path:'agregarHabilidadBack',
        component:AgregarHabilidadComponent
      },
      {
        path:'cursos/:cursosId',
        component:ActualizarCursosComponent
      },
      {
        path:'estudios/:estudiosId',
        component:ActualizarEstudiosComponent
      },
     
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
