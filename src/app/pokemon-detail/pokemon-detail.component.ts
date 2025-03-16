import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../pokemon-detail.model';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from "@angular/router"
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
 pokemonDetails!: PokemonDetail;

 constructor(private route : ActivatedRoute ,private pokemonService:PokemonService){}

 ngOnInit(): void {
  const name = this.route.snapshot.paramMap.get('name');
  if(name){
   this.pokemonService.getPokemonDetails(name).subscribe(data=>{
    this.pokemonDetails = data;
   });
  }
 }
}
