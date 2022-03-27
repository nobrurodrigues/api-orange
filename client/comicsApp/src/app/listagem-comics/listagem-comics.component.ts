import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-comics',
  templateUrl: './listagem-comics.component.html',
  styleUrls: ['./listagem-comics.component.css']
})
export class ListagemComicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('INICIOU O COMPONENT.');
  }

}
