import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id){
        this.usuarioService.getListarPorId(id).subscribe({
          next: (res) => this.usuario = res,
          error: (err) => console.error('Erro ao buscar Usuario', err)
        });
        this.isAtualiza = true;
      }
      
  }

  usuario: Usuario = {
    nome:'',
    senha:'',
    email:'',
  };

  isAtualiza = false;
  isNome = false;
  isEmail = false;
  isSenha = false;
  constructor(
    private usuarioService:UsuarioService,
    private route:ActivatedRoute
  ) {}

  salvar(){
    if(this.isAtualiza){
      this.usuarioService.atualizar(this.usuario.id, this.usuario).subscribe({
        next: (res) => {
          alert('Usuario atualizado com sucesso!');
        },
        error: (err) =>{
          console.error('Erro ao atualizar o Usuario' , err);
          alert('Erro ao atualizar usuario');
        }
      });
    }else{
    this.usuarioService.postCriar(this.usuario).subscribe({
      next: (res) =>{
        console.log('Usuario criado com sucesso', res);
        alert('Usuario criado com sucesso!');
        this.usuario = {nome: '',email: '',senha: ''};
      },
      error:(err)=>{
        console.error('Err ao criar usuario:',err);
        alert('Erro ao criar usuario.');
      }
    });
    }
  }

  validaEmail(){
    if(this.usuario.email == ""|| this.usuario.email.indexOf('@') == -1 ||
    this.usuario.email.indexOf('.') == -1) {
      document.getElementById('email')!.style.borderColor = 'red';
      this.usuario.email=""; //limpa o campo
      this.isEmail = true;

    }else{
      document.getElementById('email')!.style.borderColor = '';
      this.isEmail = false;
    }
  }
  validaNome(){
    if(this.usuario.nome.length <10){
      this.usuario.nome =""
      document.getElementById('nome')!.style.borderColor = 'red'
      this.isNome = true;
    }else{
      document.getElementById('nome')!.style.borderColor=''
      this.isNome = false;
    }
  }

  validaSenha(){
    if(this.usuario.senha.length <8){
      this.usuario.senha =""
      document.getElementById('senha')!.style.borderColor = 'red'
      this.isSenha = true;
    }else{
      document.getElementById('senha')!.style.borderColor = 'red'
      this.isSenha = false;
  }
  }
}
