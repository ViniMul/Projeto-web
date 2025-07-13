import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HomeComponent } from './componentes/home/home.component';
import { platform } from 'os';
import { BuscaCepComponent } from './componentes/busca-cep/busca-cep.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilmeService } from './services/filmes.service';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';




@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    BuscaCepComponent,
    CadastroComponent,
    ListarUsuarioComponent,
    LoginComponent,
    FavoritosComponent,
    //HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,


  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
