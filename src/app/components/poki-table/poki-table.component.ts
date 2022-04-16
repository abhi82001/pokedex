import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service'

@Component({
  selector: 'app-poki-table',
  templateUrl: './poki-table.component.html',
  styleUrls: ['./poki-table.component.css']
})
export class PokiTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] =[];
  datasource =  new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;
    
    for (let i = 1; i <= 150; i++) {
      this.pokeService.getPokemon(i).subscribe(
        res => {
          pokemonData ={
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pokemonData);
          this.datasource = new MatTableDataSource<any>(this.data)
          this.datasource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if(this.datasource.paginator){
      this.datasource.paginator.firstPage();
    }
  }

  getRow(row: any){
      this.router.navigateByUrl(`pokiDetail /${row.position}`); 
  }

}
