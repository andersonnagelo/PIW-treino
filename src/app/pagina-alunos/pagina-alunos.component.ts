import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno/aluno.model';
import { Service } from '../service'
@Component({
  selector: 'pagina-alunos',
  templateUrl: './pagina-alunos.component.html',
  styleUrls: ['./pagina-alunos.component.css']
})
export class PaginaAlunosComponent implements OnInit {

  constructor(private service: Service) { }
  alunos = [];
  ngOnInit() {
    
    this.alunos = this.service.getAluno();
  }

  // alunos = [new Aluno ('0', 'lucas', 'Design Digital', 75),
  // new Aluno ('1', 'claudia', 'RU', 75)]
}
