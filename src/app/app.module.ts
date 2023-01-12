import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
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
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ActualizarEstudiosComponent } from './pages/admin/actualizar-estudios/actualizar-estudios.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    EstudiosComponent,
    SidebarComponent,
    ExperienciaComponent,
    CursosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    AgregarExperienciaComponent,
    AgregarEstudiosComponent,
    AgregarCursoComponent,
    AgregarHabilidadComponent,
    ActualizarCursosComponent,
    ActualizarEstudiosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
