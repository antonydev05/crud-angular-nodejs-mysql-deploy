import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulo para enviar y recibir respuestas http
import { HttpClientModule } from '@angular/common/http';
// Modulo para enviar datos desde el formulario
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
// importamos el servicio 
import { GamesService } from './services/games.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent
  ],
  //agregamos el modulo http
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //agregamos Games Services como proveedor
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
