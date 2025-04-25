import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormularioComponent } from './produtos/produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component'; // IMPORTA AQUI
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutoListaComponent, canActivate: [AuthGuard]},
  { path: 'produtos/novo', component: ProdutoFormularioComponent },
  { path: 'produtos/editar/:id', component: ProdutoFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
