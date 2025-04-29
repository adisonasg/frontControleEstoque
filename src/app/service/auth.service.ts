// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5289/api/auth';
  private tokenKey = 'auth_token';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(credentials: { email: string, senha: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }  

  logout() {
    // Remove o token do cookie ou armazenamento
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  setToken(token: string) {
    this.cookieService.set(this.tokenKey, token);
  }

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey) || null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  register(dados: { email: string; senha: string }) {
    return this.http.post(`${this.apiUrl}/register`, dados);
  }
  
}
