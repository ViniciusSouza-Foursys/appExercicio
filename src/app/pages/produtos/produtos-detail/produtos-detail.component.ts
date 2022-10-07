import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-detail',
  templateUrl: './produtos-detail.component.html',
  styleUrls: ['./produtos-detail.component.css']
})
export class ProdutosDetailComponent implements OnInit {


  formProduto : Produto

  constructor(
    private _produtoService : ProdutoService,
    private _router : Router,
    private _route : ActivatedRoute
  ) {
    this.formProduto = new Produto()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this._produtoService.getProduto(Number(this._route.snapshot.paramMap.get('id'))).subscribe(data =>{
      this.formProduto = data
    })
  }

  goEditar(){
    this._produtoService.putProduto(this.formProduto).subscribe()
    setTimeout(() => {
      this._router.navigate(['produtos'])
    }, 100)
  }

}
