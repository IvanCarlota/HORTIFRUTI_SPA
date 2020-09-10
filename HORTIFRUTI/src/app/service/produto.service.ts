import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProdutos(){
    return this.http.get('http://localhost:8080/loja/')
  }

  postProduto(produto: Produto){
    return this.http.post('http://localhost:8080/loja', produto)
  }

  putProduto(produto: Produto){
    return this.http.put('http://localhost:8080/loja/', produto)
  }

  getByIdProduto(id:number){
    return this.http.get(`http://localhost:8080/loja/${id}`)
  }

  deleteProduto(id:number){
    return this.http.delete(`http://localhost:8080/loja/${id}`)}










}
