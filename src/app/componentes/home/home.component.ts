import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { Filme } from '../../models/filmes.model';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-home',
  standalone: true,           // marcar como standalone
  imports: [CommonModule],    // para usar ngFor, ngIf...
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filmes: Filme[] = [];

  constructor(private filmesService: FilmesService) {}

  ngOnInit() {
    this.filmesService.getListar().subscribe({
      next: (dados) => this.filmes = dados,
      error: (err) => console.error('Erro ao carregar filmes', err)
    });
  }


  toggleFavorito(filme: Filme): void {
    const novoEstado = !filme.favorito;
    this.filmesService.atualizar(filme.id!, { favorito: novoEstado }).subscribe(() => {
      filme.favorito = novoEstado; // atualiza na tela
    });
  }
}