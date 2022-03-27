import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginTelaComponent } from './login-tela/login-tela.component';
import { ListagemComicsComponent } from './listagem-comics/listagem-comics.component';
import { AuthService } from './login-tela/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginTelaComponent,
    ListagemComicsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AuthService, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
