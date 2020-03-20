import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AuthGuardService } from './components/guards/auth-guard.service';
import { AlunosGuard } from './components/guards/alunos.guard';

const routes: Routes = [
  {path: '',
   component: HomeComponent,
    canActivate: [AuthGuardService] },
  {path: 'cursos',
   component: CursosComponent,
    canActivate: [AuthGuardService]},
  {path: 'login',
   component: LoginComponent},
  {path: 'cursos/:id',
   component: CursoDetalheComponent,
    canActivate: [AuthGuardService] },
  {path: 'naoEncontrado',
   component: NaoEncontradoComponent},
  {path: 'alunos',
  canActivate: [AuthGuardService],
   canActivateChild: [AlunosGuard],
   loadChildren: () => import('./components/alunos/alunos.module').then(m => m.AlunosModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
