import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.getUsuarioAutenticado() === true) {
      return true;
    }
    alert('Faça login para acessar!')
    this.router.navigate(['/login']);
    return false;
  }
}
