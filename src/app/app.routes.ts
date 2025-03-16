import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch : 'full'
    },
    {
        path:'home',
        component : HomeComponent
    },
    {
        path:'getPokemonDetails/:name',
        component : PokemonDetailComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
