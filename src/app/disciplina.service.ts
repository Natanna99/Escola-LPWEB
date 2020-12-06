import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from './app.model';
import { Observable } from 'rxjs';
import { title } from 'process';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) {
  }

  todas() {
    return this.http.get('https://lista-disciplinas.herokuapp.com/api/disciplinas/');
  }

  //  carregarDados(callback){
  //   this.http.get('https://lista-disciplinas.herokuapp.com/api/disciplinas/')
  //    .subscribe(
  //      (dados)=>{
  //        console.log(dados);
  //        disciplinas => this.disciplinas = disciplinas },    
  //        error=> console.log(error)
  //        ).add(callback);
  //  }

  // encontar(arg: number | string){
  // let d = null;
  //if(typeof(arg) == 'number'){
  //  d = this.disciplinas.filter(d => d.id == arg);
  //}
  //else{
  ///  d = this.disciplinas.filter(d => d.titulo == arg);
  //}
  //if(d != null && d.length > 0){
  //return d[0];
  //} 
  //else{
  //return null;
  //}
  //}

  salvar(id: number, titulo: string, descricao: string) {
    //atualizar pracialmente os atributos da api (patch), (put atualiza todos)
    if (id) {
      return this.http.patch('https://lista-disciplinas.herokuapp.com/api/disciplinas/' + id + '/',
        { titulo: titulo, descricao: descricao });
    }
    else {
      return this.http.post('https://lista-disciplinas.herokuapp.com/api/disciplinas/', { titulo: titulo, descricao: descricao })
    }
  }

  excluir(disciplina: number | Disciplina) {
    let d = null;
    if (typeof (disciplina) == 'number') {
      d = disciplina;
    }
    else {
      d = disciplina.id;
    }
    return this.http.delete('https://lista-disciplinas.herokuapp.com/api/disciplinas/' + d + '/');


    //  let d= null;
    //  if(typeof(disciplina) == 'number'){
    //  d= this.encontar(disciplina);
    // }
    //else{
    //d= this.encontar(disciplina.id);
    //}
    //if(d){
    //   const i = this.disciplinas.indexOf(d);
    //   this.disciplinas.splice(i, 1);
    //}
    //else{
    //throw new Error('Não foi possivel encontar disciplina');
    //}
    //}
    //}
  }
}
