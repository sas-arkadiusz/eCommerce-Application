import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameService } from './services/game.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  { path: 'search/:keyword', component: GameListComponent },
  { path: 'category/:category_id', component: GameListComponent },
  { path: 'category', component: GameListComponent },
  { path: 'language/:language_id', component: GameListComponent },
  { path: 'language', component: GameListComponent },
  { path: 'singleplayer', component: GameListComponent },
  { path: 'multiplayer', component: GameListComponent },
  { path: 'vr', component: GameListComponent },
  { path: 'games', component: GameListComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: '**', redirectTo: '/games', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CartStatusComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
