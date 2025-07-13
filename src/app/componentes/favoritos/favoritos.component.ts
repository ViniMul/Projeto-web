import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filmes.service';
import { Filme } from '../../models/filmes.model';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  standalone: false,  
  styleUrls: ['./favoritos.component.css'],  

})
export class FavoritosComponent implements OnInit {
  favoritos: Filme[] = [];

  constructor(private filmesService: FilmeService) {}

  ngOnInit() {
    this.filmesService.listarFavoritos().subscribe(dados => {
  this.favoritos = dados;
});
  }

  alternarFavorito(filme: Filme) {
  this.filmesService.favoritar(filme.id, !filme.favorito).subscribe((filmeAtualizado) => {
    // Atualiza a lista localmente removendo o desfavoritado
    this.favoritos = this.favoritos.filter(f => f.id !== filmeAtualizado.id || filmeAtualizado.favorito);
  });
}
}