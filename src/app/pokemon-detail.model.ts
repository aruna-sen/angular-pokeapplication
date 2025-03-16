export interface Ability {
    name : string;
 }

 export interface PokemonAbility{
    ability : Ability;
 }

 export interface Stat{
    name : string;
 }

 export interface PokemonStat{
    stat : Stat;
    base_stat : number;
 }

 export interface Sprite{
    front_default : string;
 }

 export interface PokemonDetail{
    name : string;
    height: number;
    weight: number;
    abilities : PokemonAbility[];
    stats : PokemonStat[];
    sprites : Sprite;
    base_experience : string;
 }