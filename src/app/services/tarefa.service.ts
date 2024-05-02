import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefas:Tarefa[]=[];


  // Método de listar
  listar():Tarefa[]{
    return this.tarefas;
  }

  // Método de criação
  criar(tarefa:Tarefa){
    this.tarefas.push(tarefa);
  }

  // Método de remover
  remover(nomeTarefa:string){
    const tarefa = this.tarefas.find(c => c.nomeTarefa == nomeTarefa);

    if(tarefa){
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index,1);
    }
  }

}
