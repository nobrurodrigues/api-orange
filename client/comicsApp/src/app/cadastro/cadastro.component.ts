import { UsuarioService } from './../shared/usuario.service';
import { Usuario } from './../model/usuario.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxViacepService, CEPError } from "@brunoc/ngx-viacep";
import { Router } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private toastr: ToastrService,
              private viaCep: NgxViacepService,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      nascimento: [''],
      endereco: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      cep: ['']
    });
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  salvar(): void {
    if(this.cadastroForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.usuario.nascimento = this.dataFormatada(this.usuario.nascimento);
      console.log(this.usuario);

      this.usuarioService.salvar(this.usuario).subscribe({
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

  buscaCep(cep: any): void{
    this.viaCep.buscarPorCep(cep).subscribe({
      next: (data) => {
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
