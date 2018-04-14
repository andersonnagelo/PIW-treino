import { Injectable } from '@angular/core';
import { Aluno } from './aluno/aluno.model';


@Injectable()
export class Service{
    alunos : Aluno[] = [];
    addAluno(aluno:Aluno){
       this.alunos.push(new Aluno('3', aluno.nome, aluno.curso, 33))
        console.log(aluno);
    }

    getAluno (){
        console.log(this.alunos)
        return this.alunos;
    }
}