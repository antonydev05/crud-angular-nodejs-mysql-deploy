import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/game';

import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  edit: boolean = false;

  constructor(
    private gameService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // aqui obtenemos los datos para poder actualizar
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.gameService.getGame(params['id']).subscribe({
        next: (res) => {
          // convertimos a array y tomamos la posicion [0]
          const datosGame = Object.values(res);
          this.game = datosGame[0];
          this.edit = true; // cambiamos el estado a true para actualizar
        },
        error: (err) => console.log(err),
      });
    }
  }

  saveNewGame() {
    // eliminamos los valores que se autogeneran
    delete this.game.created_at;
    delete this.game.id;
    // usamos el metodo save del servicio
    this.gameService.saveGame(this.game).subscribe({
      next: (res) => {
        this.router.navigate(['/games']); // listar luego de guardar
      },
      error: (err) => console.error(err),
    });
  }

  // actualizar
  updateGame() {
    // la fecha no de modificará asi que lo borramos
    delete this.game.created_at;
    // enviamos la id y los datos para actualizar
    this.gameService.updateGame(this.game.id!, this.game).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/games']); // listamos luego de actualizar
      },
      error: (err) => console.error(err),
    });
  }
}
