import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos : any[] = []

  acessoTotal: boolean = false

  constructor(
    private _produtoService : ProdutoService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }
    this.buscarProdutos()

    if(window.localStorage.getItem('acesso') === 'Total'){
      this.acessoTotal = true
    }
  }

  buscarProdutos(){
    this._produtoService.getAllProdutos().subscribe(data =>{
      this.produtos = data
    })
  }
}
