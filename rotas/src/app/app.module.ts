import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { FormsModule } from '@angular/forms';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
