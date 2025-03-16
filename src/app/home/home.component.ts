import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.service';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule,RouterModule,FormsModule],  
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pokemonList:Pokemon[]=[];
  filteredPokemonList: Pokemon[]=[];
  searchText: string='';


  constructor(private pokemonService : PokemonService){}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(data=>{
      this.pokemonList=data;
      this.filteredPokemonList=data;
      console.log("Oninit");
      console.log(this.pokemonList);
    });
  }

  ngOnChanges() {
    this.applyFilter();
    console.log("OnChanges");
  }

  applyFilter() {
    console.log("On filter");
  this.filteredPokemonList = this.pokemonList.filter(pokemon => 
    pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
  }

  handleImageError(event: Event){
    console.error("image failed to load:",event);
  }

}
