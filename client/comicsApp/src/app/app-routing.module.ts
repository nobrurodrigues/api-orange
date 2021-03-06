import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginTelaComponent } from './login-tela/login-tela.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComicsComponent } from './listagem-comics/listagem-comics.component';

const routes: Routes = [
  {path: '', component: LoginTelaComponent},
  {path: 'dashboard', component: ListagemComicsComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
