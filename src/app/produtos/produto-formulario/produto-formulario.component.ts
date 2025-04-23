import { Component } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-produto-formulario',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.scss'],
  standalone: false,
})
export class ProdutoFormularioComponent {
  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0
  };

  constructor(private produtoService: ProdutoService) {}

  salvarProduto(): void {
    this.produtoService.adicionarProduto(this.produto).subscribe({
      next: () => {
        alert('Produto adicionado com sucesso!');
        this.produto = { id: 0, nome: '', preco: 0, quantidade: 0 }; // limpa o form
      },
      error: err => {
        console.error('Erro ao adicionar produto', err);
        alert('Erro ao adicionar produto');
      }
    });
  }
}
