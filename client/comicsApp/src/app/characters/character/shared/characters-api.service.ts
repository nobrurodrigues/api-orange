import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY='edfd068fb0beeed4fb254fc2eb6ebf5a';
  HASH='';
  URL_API=`https://gateway.marvel.com:443/v1/public/characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results));
  }


}
