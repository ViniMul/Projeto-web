import { Component, OnInit } from '@angular/core';
import { ConsultacepService } from '../../services/consultacep.service';

@Component({
  selector: 'app-busca-cep',
  standalone: false,
  templateUrl: './busca-cep.component.html',
  styleUrl: './busca-cep.component.css'
})
export class BuscaCepComponent implements OnInit{


  ngOnInit(): void {
      console.log('Componente BuscaCep iniciado')
  }



  cep :any;
  logradouro: any;
  bairro: any;
  cidade: any;
  estado: any;
  buscar(){
    this.consultaCep.getConsultar(this.cep).subscribe(res => {
      console.log(res);

      this.cidade = res.localidade;
      this.bairro = res.bairro;
      this.logradouro = res.logradouro
      this.estado = res.uf;

    },error =>{
      console.log(error);
      this.cep = '';
      this.logradouro = '';
      this.bairro = '';
      this.estado= '';
      this.cidade= '';
    });
  }

  constructor(private consultaCep: ConsultacepService){}

}
