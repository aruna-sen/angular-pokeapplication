import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetail } from './pokemon-detail.model';

export interface Pokemon{
  name: string;
  imageUrl: String;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //private apiUrl='http://localhost:9090/rest/api/v1';
  private apiUrl='http://54.194.184.84:9090/rest/api/v1';

  constructor(private http:HttpClient) {} 

  getPokemonList():Observable<Pokemon[]>{
    return this.http
    .get<Pokemon[]>(`${this.apiUrl}/getHundredPokemon`)
    .pipe(
      map((pokemonList)=>
        pokemonList.map((pokemon)=>({
        name: pokemon.name,
        imageUrl: pokemon.imageUrl
      }))
    )
    );
  }

  getPokemonDetails(name:string):Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(`${this.apiUrl}/getPokemonDetails/${name}`)
  }

}
