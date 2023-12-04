import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private username: string | null = null;

  setUsername(username: string | null): void {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
  }
}
