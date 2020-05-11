import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto
  delOk:boolean = false

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

btnSim(){
  this.produtoService.deleteProduto(this.produto.id).subscribe(()=>{
    this.delOk = true
    this.router.navigate(['/loja'])
    localStorage.setItem("delOk", this.delOk.toString())
  })
}

btnNao(){
  this.router.navigate(['/loja'])
}


}
