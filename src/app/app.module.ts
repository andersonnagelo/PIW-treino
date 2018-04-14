import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Service } from './service';


import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { PaginaAlunosComponent } from './pagina-alunos/pagina-alunos.component';
import { InputAlunoComponent } from './input-aluno/input-aluno.component';
import { HeaderComponent } from './header/header.component';
import { routing} from './app.routing'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    PaginaAlunosComponent,
    InputAlunoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
