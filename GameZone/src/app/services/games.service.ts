import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = 'https://api.example.com/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getGameById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addGame(game: any): Observable<any> {
    return this.http.post(this.apiUrl, game);
  }

  updateGame(id: string, game: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
