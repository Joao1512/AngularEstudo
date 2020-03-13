import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {RouterModule}  from "@angular/router";
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { InputPropertyComponent } from './components/event-binding/input-property.component';
import { OutputPropertyComponent } from './components/event-binding/output-property.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    ProductListComponent,
    EventBindingComponent,
    CadastroProdutosComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
