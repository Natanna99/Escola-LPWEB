import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-disciplina',
  templateUrl: './lista-disciplina.component.html',
  styleUrls: ['./lista-disciplina.component.css']
})
export class ListaDisciplinaComponent implements OnInit {

  @Input()
  disciplina= null;

  @Input()
  editandoDisciplina= null;

  @Output()
  oneditar= new EventEmitter<any>();

  @Output()
  onexcluir= new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  editar(item){
    this.oneditar.emit(item);

  }

  excluir(item){
    this.onexcluir.emit(item);
  }

}
