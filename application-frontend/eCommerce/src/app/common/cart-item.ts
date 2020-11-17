import { Game } from './game';

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(game: Game) {
        this.id = game.id;
        this.name = game.name;
        this.imageUrl = game.imageUrl;
        this.unitPrice = game.unitPrice;

        this.quantity = 1;
    }
}
