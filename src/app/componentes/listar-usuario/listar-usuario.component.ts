import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  
  ){}
  ngOnInit() {
      this.listarUsuarios();
  }
  usuarios:Usuario[] = [];


  listarUsuarios(){
    this.usuarioService.getListar().subscribe({
      next:(resposta) => this.usuarios = resposta,
      error: (err) => console.error(err)
    })
  }
  editar(usuario:Usuario){
    this.router.navigate(['/cadastro', usuario.id]);
  }
  deletar(id: number){
    this.usuarioService.deletar(id).subscribe(()=> {
      this.listarUsuarios();
    })
  }


}
