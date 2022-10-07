import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : any[] = []
  tempProdNome : string = ''
  tempProdId : number = 0

  constructor(
    private _produtoService : ProdutoService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this.buscarProdutos()
  }

  buscarProdutos(){
    this._produtoService.getAllProdutos().subscribe(data =>{
      this.produtos = data
    })
  }

  goDetail(id : number){
    this._router.navigate(['produtos', id])
  }

  goBuscar(id : number){
    this._produtoService.getProduto(id).subscribe(data =>{
      this.tempProdNome = data.nome
      this.tempProdId = data.id
    })
  }

  goDelete(){
    this._produtoService.deleteProduto(this.tempProdId).subscribe()
    window.location.reload()
  }

}
