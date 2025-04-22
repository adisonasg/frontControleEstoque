import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormularioComponent } from './produtos/produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component'; // IMPORTA AQUI

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutoListaComponent }, // ADICIONA ESTA LINHA
  { path: 'produtos/novo', component: ProdutoFormularioComponent },
  { path: 'produtos/editar/:id', component: ProdutoFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
