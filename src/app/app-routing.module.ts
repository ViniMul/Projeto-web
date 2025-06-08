import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BuscaCepComponent } from './componentes/busca-cep/busca-cep.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'consulta', component: BuscaCepComponent, canActivate:[AuthGuard]},
  {path: 'cadastro', component: CadastroComponent, canActivate:[AuthGuard]},
  {path: 'cadastro/:id', component: CadastroComponent,canActivate:[AuthGuard]},
  {path: 'listar', component: ListarUsuarioComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
