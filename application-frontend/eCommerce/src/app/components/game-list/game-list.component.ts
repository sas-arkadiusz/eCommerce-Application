import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/common/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];
  currentCategoryId: number;
  currentLanguageId: number;

  constructor(private gameService: GameService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listGames();
    });
  }

  listGames() {

    // Check if "ID" parameter is available.
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('category_id');
    // Check if "Language" parameter is available.
    const hasLanguage: boolean = this.route.snapshot.paramMap.has('language_id');
    const hasSingleplayer: boolean = this.route.snapshot.parent._routerState.url.includes("/singleplayer");
    const hasMultiplayer: boolean = this.route.snapshot.parent._routerState.url.includes("/multiplayer");
    const hasVr: boolean = this.route.snapshot.parent._routerState.url.includes("/vr");

    if(hasCategoryId) {
      // Get the "ID" parameter.
      this.currentCategoryId = +this.route.snapshot.paramMap.get('category_id');
    } else if(hasLanguage) {
      this.currentLanguageId = +this.route.snapshot.paramMap.get('language_id');
    } else {
      // Set the default value for the "ID" parameter.
      this.currentCategoryId = 0;
      this.currentLanguageId = 0;
    }

    // Get the games for the given category ID.
    if(this.currentCategoryId == 0 && this.currentLanguageId == 0 && hasSingleplayer == false && hasMultiplayer == false && hasVr == false) {
      console.log('eee');
      this.gameService.getAllProductsList().subscribe(
        data => {
          this.games = data;
        }
      )
    } else if(this.currentCategoryId != undefined && this.currentCategoryId != 0) {
      console.log('ddd');
      this.gameService.getProductListByCategory(this.currentCategoryId).subscribe(
        data => {
          this.games = data;
        }
      )
    } else if(this.currentLanguageId != undefined && this.currentLanguageId != 0) {
      console.log('aa');
      this.gameService.getProductListByLanguage(this.currentLanguageId).subscribe(
        data => {
          this.games = data;
        }
      )
    } else if(hasSingleplayer != false) {
      console.log('bbb');
      this.gameService.getProductListBySingleplayer().subscribe(
        data => {
          this.games = data;
        }
      )
    } else if(hasMultiplayer != false) {
      console.log('ccc');
      this.gameService.getProductListByMultiplayer().subscribe(
        data => {
          this.games = data;
        }
      )
    } else if(hasVr == true) {
      console.log('aaa');
      this.gameService.getProductListByVr().subscribe(
        data => {
          this.games = data;
        }
      )
    }
  }

}
