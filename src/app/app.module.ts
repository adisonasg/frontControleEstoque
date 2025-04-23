import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produtos/produto-formulario/produto-formulario.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormularioComponent,
    ProdutoListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]), // isso resolve o erro do router-outlet
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

