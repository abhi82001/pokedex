import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseurl = environment.baseurl;

  constructor(private http:HttpClient) { }

  getPokemon(index:any){
    return this.http.get<any>(`${this.baseurl}/pokemon/${index}`);
  }


}
