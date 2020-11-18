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
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'search/:keyword', component: GameListComponent },
  { path: 'category/:category_id', component: GameListComponent },
  { path: 'category', component: GameListComponent },
  { path: 'language/:language_id', component: GameListComponent },
  { path: 'language', component: GameListComponent },
  { path: 'singleplayer', component: GameListComponent },
  { path: 'multiplayer', component: GameListComponent },
  { path: 'vr', component: GameListComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'games', component: GameListComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: '**', redirectTo: '/games', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CartStatusComponent,
    SearchComponent,
    GameDetailsComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginPageComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
