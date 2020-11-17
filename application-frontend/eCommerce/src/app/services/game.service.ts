import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../common/game';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/api/games';

  constructor(private httpClient: HttpClient) { }

  searchGames(theKeyword: string): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getGameById(gameId: number): Observable<Game> {
    const gameUrl = `${this.baseUrl}/${gameId}`;
    return this.httpClient.get<Game>(gameUrl);
  }

  getAllProductsList(): Observable<Game[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getProductListByCategory(categoryId: number): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/findByGenreId?id=${categoryId}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getProductListByLanguage(languageId: number): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/findByLanguageId?id=${languageId}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getProductListBySingleplayer(): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/findByHasSingleplayerTrue`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getProductListByMultiplayer(): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/findByHasMultiplayerTrue`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getProductListByVr(): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/findByHasVrTrue`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.games)
    );
  }
}

interface GetResponse {
  _embedded: {
    games: Game[]
  }
}