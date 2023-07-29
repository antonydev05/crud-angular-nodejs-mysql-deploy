import { Request, Response, json } from "express";

import {pool} from "../database";

class GamesController {
  // metodo para listar todos los juegos
  public async list(req: Request, res: Response): Promise<any> {
    try {
      const games = await pool.query("SELECT * FROM games");
      console.log(games);
      res.json(games[0]);
    } catch (error) {
      console.log("Error db: " + error);
    }
  }

  // Metodo para 1 juego por id
  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
    if(games.length>0) {
        return res.json(games[0]);
        res.status(404).json({text:"the game doesn't exists"});
    }
  }

  // metodo para crear un juego
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const game = await pool.query("INSERT INTO games set ?", [req.body]);
      res.json({ message: "Game saved" });
    } catch (error) {
      console.log("Error db: " + error);
    }
    //await pool.query('INSERT INTO games set ?', [req.body]);
    //console.log(req.body);
    //res.json({message: 'Game saved'});
  }

  // metodo para borrar
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE id = ?', [id]);
    res.json({text: "The game was deleted"});
  }

  // metodo para actualizar
  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({ message: "The was updated "});
  }
}

const gamesController = new GamesController();
export default gamesController;
