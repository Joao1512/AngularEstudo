import { Router } from '@angular/router';
import { Usuario } from './../components/login/usuario';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(
    private router: Router,
  ) { }
  fazerLogin(usuario: Usuario){
    if (usuario.nome === '@usuario' && usuario.senha === '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
  getUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
}
