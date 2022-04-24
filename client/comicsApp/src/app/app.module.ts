import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginTelaComponent } from './login-tela/login-tela.component';
import { ListagemComicsComponent } from './listagem-comics/listagem-comics.component';
import { AuthService } from './login-tela/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxViacepModule } from "@brunoc/ngx-viacep";

@NgModule({
  declarations: [
    AppComponent,
    LoginTelaComponent,
    ListagemComicsComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxViacepModule
  ],
  providers: [AuthService, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
