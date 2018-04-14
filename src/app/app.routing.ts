import { Routes, RouterModule } from '@angular/router';
import { InputAlunoComponent } from './input-aluno/input-aluno.component';
import { PaginaAlunosComponent } from './pagina-alunos/pagina-alunos.component';

const APP_ROUTES:  Routes =[
    {path: "", redirectTo: "/pagina-alunos", pathMatch: "full"},
    {path: "pagina-alunos", component: PaginaAlunosComponent},
    {path: "input-aluno", component: InputAlunoComponent},
]
export const routing=RouterModule.forRoot(APP_ROUTES);
