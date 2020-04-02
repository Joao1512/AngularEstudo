import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './components/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './components/exemplos-pipes/camel-case.pipe';
import { FiltroArrayPipe } from './components/exemplos-pipes/filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
