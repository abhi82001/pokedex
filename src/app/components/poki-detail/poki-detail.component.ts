import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-poki-detail',
  templateUrl: './poki-detail.component.html',
  styleUrls: ['./poki-detail.component.css']
})
export class PokiDetailComponent implements OnInit {

pokemon: any = '';
pokemonType = [];
pokemonMoves = [];
pokemonImg = '';
pokemonAbilities =[];

  constructor(private pokemonService: PokemonService, private activedRouter: ActivatedRoute) {
    this.activedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
   }

  ngOnInit(): void {
  }

  getPokemon(id: any){
    this.pokemonService.getPokemon(id).subscribe(
      res =>{
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name; 
        this.pokemonMoves = res.moves[0].move.name;  
        this.pokemonAbilities = res.abilities[0].ability.name;      
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );
  }

}
