import { Component } from '@angular/core';
import {Pokemon} from '../../interfaces/Pokemon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemon:Pokemon[] = []

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.get_Pokemon();
  }

  get_Pokemon():void{
    this.http.get<Pokemon[]>('https://demo1290477.mockable.io/pockemon').subscribe(
      pokemon => this.pokemon = pokemon.slice(0, 20),
      error => console.error('Erro ao buscar Pokemons ', error)
    );
  }
}