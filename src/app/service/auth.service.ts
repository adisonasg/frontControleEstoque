// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5289/api/auth';
  private tokenKey = 'auth_token';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(credentials: { email: string; senha: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    this.cookieService.delete(this.tokenKey);
    this.router.navigate(['/login']);
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
}
