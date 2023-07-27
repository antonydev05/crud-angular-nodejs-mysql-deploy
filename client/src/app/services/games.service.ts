import { Injectable } from '@angular/core';
// Nos permitirá hacer peticiones http
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  // guardamos las apis a consumir
  API_URI = 'http://localhost:3000/api';

  // Instanciamos en una variable privada
  constructor(private http: HttpClient) {}

  // Creamos los metodos api
  // listar
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  // Consultar juego por id
  getGame(id: String) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  // guardar juego (usamos el modelo Game)
  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games/`, game);
  }

  // eliminar game
  deleteGame(id: String) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
  //actualizar game
  updateGame(id:number, updatedGame: Game) {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
}
