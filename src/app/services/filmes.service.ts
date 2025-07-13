import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private baseUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) {}

  // 🔄 Listar todos os filmes
  listar(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.baseUrl);
  }

  // 🆕 Criar novo filme
  criar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.baseUrl, filme);
  }

  // ✏️ Atualizar filme
  atualizar(id: number, filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(`${this.baseUrl}/${id}`, filme);
  }

  // ❌ Deletar filme
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // ❤️ Favoritar/Desfavoritar
  favoritar(id: number, favorito?: boolean): Observable<Filme> {
    const body = favorito !== undefined ? { favorito } : {};
    return this.http.patch<Filme>(`${this.baseUrl}/${id}/favoritar`, body);
  }

  // ⭐ Listar favoritos
  listarFavoritos(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseUrl}/favoritos`);
  }
}