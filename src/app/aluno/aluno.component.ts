import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno/aluno.model'
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input () alunos:Aluno[];

}
