import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../service/produto.service';


@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  standalone: false
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  excluirProduto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.excluirProduto(id).subscribe(() => {
        this.carregarProdutos();
      });
    }
  }
}