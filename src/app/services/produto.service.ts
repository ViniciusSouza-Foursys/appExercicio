import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  urlApi : string = 'http://localhost:3000/produtos/'


  constructor(
    private _http : HttpClient,
  ) { }

  getProduto(id : number) : Observable<any> {
    return this._http.get(this.urlApi+id)
  }

  getAllProdutos() : Observable<any> {
    return this._http.get(this.urlApi)
  }

  postProduto(prod : any) : Observable<any> {
    return this._http.post(this.urlApi, prod)
  }

  putProduto(prod : any) : Observable<any> {
    return this._http.put(this.urlApi+prod.id, prod)
  }

  deleteProduto(id : number) : Observable<any> {
    return this._http.delete(this.urlApi+id)
  }
}
