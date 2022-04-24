import { Observable } from 'rxjs';
import { Usuario } from './../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'api/cadastro';

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<Usuario>(this.API, usuario);
  }
}
