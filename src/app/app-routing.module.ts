import { ProdutosDetailComponent } from './pages/produtos/produtos-detail/produtos-detail.component';
import { ProdutosCadastroComponent } from './pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { UsuariosDetailComponent } from './pages/usuarios/usuarios-detail/usuarios-detail.component';
import { UsuariosCadastroComponent } from './pages/usuarios/usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios-cadastro', component: UsuariosCadastroComponent},
  {path: 'usuarios/:id', component: UsuariosDetailComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos-cadastro', component: ProdutosCadastroComponent},
  {path: 'produtos/:id', component: ProdutosDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
