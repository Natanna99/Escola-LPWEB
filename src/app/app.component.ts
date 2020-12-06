import { Component } from '@angular/core';
import { Disciplina } from './app.model';
import { DisciplinaService } from './disciplina.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escola';
  
  titulo = null;
  descricao = null;
  disciplina: any = [];
  editandoDisciplina = {id: 0, titulo: '', descricao: ''};

  constructor(private disciplinaService: DisciplinaService){ 
    this.atualizarLista();
  }

  atualizarLista(){
    this.disciplinaService.todas().subscribe(dados=>{
      this.disciplina= dados;
    });  
  }
 
  salvar() {
    this.editandoDisciplina.titulo = this.titulo;
    this.editandoDisciplina.descricao= this.descricao;
    this.disciplinaService.salvar(
      this.editandoDisciplina.id,
      this.editandoDisciplina.titulo, 
      this.editandoDisciplina.descricao).subscribe(
        (dados)=>{
          this.atualizarLista();
        },    
          error=> console.log(error)
       );

    this.titulo= null;
    this.descricao = null;
    this.editandoDisciplina= {id: 0, titulo: '', descricao: ''};
  }

  excluir(disciplina) {
    if (this.editandoDisciplina == disciplina) {
      alert('não é possivel excluir disciplina em edição');
    } else {
      if (confirm('deseja excluir?')) {
        this.disciplinaService.excluir(disciplina).subscribe(
          dados=> this.atualizarLista(),
          erro=> console.log(erro)
        );
      }
    }
  }

  editar(disciplina){
    this.titulo= disciplina.titulo;
    this.descricao= disciplina.descricao;
    this.editandoDisciplina= disciplina;
  }


  cancelar(){
    this.titulo= null;
    this.descricao= null;
    this.editandoDisciplina= null;
  }

}



  

