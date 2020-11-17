import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Game } from 'src/app/common/game';
import { CartService } from 'src/app/services/cart.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game: Game = new Game();

  constructor(private gameService: GameService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleGameDetails();
    })
  }

  handleGameDetails() {
    // Get the ID and covert it to a number.
    const gameId: number = +this.route.snapshot.paramMap.get('id');

    this.gameService.getGameById(gameId).subscribe(
      data => {
        this.game = data;
      }
    )
  }

  addToCart() {
    const cartItem = new CartItem(this.game);
    this.cartService.addToCart(cartItem);
  }

}
