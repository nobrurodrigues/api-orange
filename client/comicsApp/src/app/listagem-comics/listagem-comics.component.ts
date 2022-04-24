import { CharactersApiService } from './../characters/character/shared/characters-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listagem-comics',
  templateUrl: './listagem-comics.component.html',
  styleUrls: ['./listagem-comics.component.css']
})
export class ListagemComicsComponent implements OnInit {

  comics: Observable<any>;

  constructor(private service: CharactersApiService) { }

  ngOnInit(): void {
    console.log('Chamada para a Api Marvel');
    this.getAllComics();
    console.log('RETORNO -->', this.comics);
  }

  getAllComics() {
   this.comics = this.service.getAllCharacters();
  }

}
