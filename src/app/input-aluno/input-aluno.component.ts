import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno/aluno.model';
import { Service } from '../service'
@Component({
  selector: 'app-input-aluno',
  templateUrl: './input-aluno.component.html',
  styleUrls: ['./input-aluno.component.css']
})
export class InputAlunoComponent implements OnInit {

  id: string;
  nome: string;
  curso: string;
  qtdPresenca: number;

  constructor(private service: Service) { }

  ngOnInit() {
  }

  adicionar(event){
    event.preventDefault();
    this.service.addAluno(new Aluno('0', this.nome, this.curso, 33));
    
  }

}
