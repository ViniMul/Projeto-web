import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../models/filmes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private api = 'http://localhost:3000/api/filmes';

  constructor(private http: HttpClient) {}

  getListar(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.api);
  }

  postCriar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.api, filme);
  }

  getListarPorId(id: number): Observable<Filme> {
    return this.http.get<Filme>(`${this.api}/${id}`);
  }

  atualizar(id: number, filme: Partial<Filme>): Observable<Filme> {
    return this.http.put<Filme>(`${this.api}/${id}`, filme);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}