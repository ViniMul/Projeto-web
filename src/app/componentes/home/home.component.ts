import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filmes.service';
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

  constructor(private filmeService: FilmeService) { }
  ngOnInit(): void {
    this.filmeService.listar().subscribe((dados) => {
      this.filmes = dados;
      console.log(this.filmes);  // Aqui sim os dados já chegaram
    });
  }



  alternarFavorito(filme: Filme) {
    this.filmeService.favoritar(filme.id).subscribe(filmeAtualizado => {
      filme.favorito = filmeAtualizado.favorito; // atualiza o favorito no front com base no back
    });
  }
}