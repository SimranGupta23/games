import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://api.example.com/auth';  // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(map(response => {       
        return {
          user: response.user,
          token: response.token
        };
      })
    );
  }
  
  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, user);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if the token exists
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token on logout
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
