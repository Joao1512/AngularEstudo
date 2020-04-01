import { CursosService } from './services/cursos.service';
import { CursosFormComponent } from './components/cursos-form/cursos-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AuthGuardService } from './components/guards/auth-guard.service';
import { AlunosGuard } from './components/guards/alunos.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent,
    CursosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthGuardService, AlunosGuard, CursosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
