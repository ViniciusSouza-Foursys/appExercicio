import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  formProduto : Produto

  constructor(
    private _produtoService : ProdutoService,
    private _router : Router
  ) {
    this.formProduto = new Produto()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }
  }

  goCadastrar(){
    this._produtoService.postProduto(this.formProduto).subscribe()
    setTimeout(() => {
      window.location.reload()
    },100)
  }

}
