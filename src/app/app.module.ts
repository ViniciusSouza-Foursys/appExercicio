import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuariosCadastroComponent } from './pages/usuarios/usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosDetailComponent } from './pages/usuarios/usuarios-detail/usuarios-detail.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosCadastroComponent } from './pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosDetailComponent } from './pages/produtos/produtos-detail/produtos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UsuariosComponent,
    UsuariosCadastroComponent,
    UsuariosDetailComponent,
    ProdutosComponent,
    ProdutosCadastroComponent,
    ProdutosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
