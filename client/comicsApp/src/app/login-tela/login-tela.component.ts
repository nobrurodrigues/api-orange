
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-login-tela',
  templateUrl: './login-tela.component.html',
  styleUrls: ['./login-tela.component.css']
})
export class LoginTelaComponent implements OnInit {

 usuario: Usuario = new Usuario;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('Inicio component de Login');
  }

  login() {
    console.log(this.usuario);
    this.router.navigate(['/dashboard']);
  }

}
