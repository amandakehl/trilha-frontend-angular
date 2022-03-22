import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { DesafioSeteComponent } from './components/desafio-sete/desafio-sete.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CodigoConvitePipe } from './pipes/codigo-convite.pipe';
import { DocumentoCPFPipe } from './pipes/documento-cpf.pipe';
import { DocumentoCNPJPipe } from './pipes/documento-cnpj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ComponentePaiComponent,
    DesafioSeteComponent,
    ComponenteFilhoComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    TestesPipeComponent,
    CodigoConvitePipe,
    DocumentoCPFPipe,
    DocumentoCNPJPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
