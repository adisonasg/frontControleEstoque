import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, ProdutoService } from '../../service/produto.service';
import { AuthService } from '../../service/auth.service'; // <-- Adicione isso

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  standalone: false
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService, // <-- Injeta o serviço de autenticação
    private router: Router            // <-- Injeta o roteador
  ) {}

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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
