import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild{
  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      console.log(state);
      if (state.url.includes('editar')) {
        alert('Sem permissão para editar');
        return false;
      }
      return true;
    }
}
