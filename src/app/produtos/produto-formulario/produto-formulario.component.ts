import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../model/produto.model';

@Component({
  selector: 'app-produto-formulario',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.scss'],
  standalone: false,
})
export class ProdutoFormularioComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0
  };

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const idNumber = parseInt(id, 10);
      this.produtoService.getProdutoPorId(idNumber).subscribe({
        next: (produto) => {
          this.produto = produto;
        },
        error: () => {
          alert('Erro ao carregar o produto.');
        }
      });
    }
  }

  salvarProduto(): void {
    const operacao = this.produto.id === 0
      ? this.produtoService.adicionarProduto(this.produto)
      : this.produtoService.atualizarProduto(this.produto.id, this.produto);

    operacao.subscribe({
      next: () => {
        alert(this.produto.id === 0 ? 'Produto adicionado!' : 'Produto atualizado!');
        this.produto = { id: 0, nome: '', preco: 0, quantidade: 0 };
      },
      error: () => alert('Erro ao salvar produto')
    });
  }
}
