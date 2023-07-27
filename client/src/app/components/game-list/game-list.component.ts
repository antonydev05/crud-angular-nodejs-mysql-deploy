import { Component, OnInit, HostBinding } from '@angular/core';

// importamos el servicio para consumir apis
import { GamesService } from '../../services/games.service'
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{

  @HostBinding('class') class = 'row';

  //guardamos la info en un arreglo de tipo juego
  games: any = [];

  // instanciamos
  constructor(private gamesService: GamesService) {}

  // iniciamos la funcion
  ngOnInit() {
      this.getGames();
  }

  // obtener la lista de juegos
  getGames(){
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
        // console.log(res); ver el resultado de la cosulta
      },
      err => console.log(err)
    )
  }

  // borrar un juego
  deleteGame(id: string){
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames(); // listar al borrar
      },
      err => console.log(err)
    )
    //console.log(id);
  }

}
