import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { FormsModule } from '@angular/forms';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AuthGuardService } from './components/guards/auth-guard.service';
import { AlunosGuard } from './components/guards/alunos.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ AuthGuardService, AlunosGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
