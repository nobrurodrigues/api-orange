import { UsuarioService } from './../shared/usuario.service';
import { Usuario } from './../model/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgxViacepService, CEPError, CEPErrorCode } from "@brunoc/ngx-viacep";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private toastr: ToastrService,
              private viaCep: NgxViacepService,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      nascimento: new FormControl(''),
      endereco: new FormControl(''),
      complemento: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      cep: new FormControl('')
    });
  }

  salvar(): void {
    if(this.cadastroForm.valid) {
      let form = this.cadastroForm.value;

      let usuario = this.extrairModel(form);
      usuario.nascimento = this.dataFormatada(usuario.nascimento);

      this.usuarioService.salvar(usuario).subscribe({
        next: () => {
          this.toastr.success('Cadastrado com sucesso :)', 'Bem-vindo!');
          setTimeout(() => {
            console.log('Redirecionando...');
            this.router.navigate(['/dashboard']);
          }, 3000);
        },
        error: () => this.toastr.error('Algo deu errado, tente novamente', 'Ops :('),
        complete: () => console.log('Salvo com sucesso')
      });

    } else {
      this.toastr.error('Preencha todos os campos obrigatórios!', 'Opa :(');
    }
  }

  extrairModel(form: any): Usuario {
    let usuario = new Usuario();

      usuario.username = form.username;
      usuario.cpf = form.cpf;
      usuario.nascimento = form.nascimento;
      usuario.cep = form.cep;
      usuario.cidade = form.cidade;
      usuario.complemento = form.complemento;
      usuario.email = form.email;
      usuario.endereco = form.endereco;
      usuario.estado = form.estado;
      usuario.password = form.password;

    return usuario;
  }

  buscaCep(cep: any): void{
    this.viaCep.buscarPorCep(cep).subscribe({
      next: (data) => {
        console.log(data.logradouro);
        this.populaFormulario(data);
      },
      error: (error: CEPError) => this.toastr.error(error.message, 'Ops :('),
      complete: () => console.log('Busca por Cep realizada...')
    })
  }

  populaFormulario(data: any) {
    this.cadastroForm.patchValue({
      endereco: data.logradouro,
      bairro: data.bairro,
      complemento: data.complemento,
      cidade: data.localidade,
      estado: data.uf
    });
  }

  dataFormatada(data: any){
    var date = new Date(data),
        dia  = (date.getDate()+1).toString().padStart(2, '0'),
        mes  = (date.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = date.getFullYear();

        console.log('DATA FORMATADA: ', dia+"/"+mes+"/"+ano);
    return dia+"/"+mes+"/"+ano;
}

}
