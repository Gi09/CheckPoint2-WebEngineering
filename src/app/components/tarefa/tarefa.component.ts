import { Component } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

  tarefas:Tarefa[]=[];
  tarefaForm: FormGroup = new FormGroup({})

  constructor(private tarefaService:TarefaService, private formBuilder: FormBuilder){
    this.tarefaForm = this.formBuilder.group({
      nomeTarefa: ['', Validators.required],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      data: ['', Validators.required]
    })
  }

  // Método para adicionar
  adicionar():void{
    if(this.tarefaForm.valid){
      const tarefaNova: Tarefa = {
        nomeTarefa: this.tarefaForm.value.nomeTarefa,
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        data: this.tarefaForm.value.data
      }
      // Limpa o formulário após a inserção
      this.tarefaForm.reset()
      this.tarefaService.criar(tarefaNova)
      alert("Tarefa adicionada")
    }
  }

  // Método para listar
  listar():void{
    this.tarefas = this.tarefaService.listar();
  }

  // Método de remoção
  remover(nomeTarefa:string):void{
    this.tarefaService.remover(nomeTarefa);
    alert("Tarefa removida")
  }

  ngOnInit():void{
    this.listar();
  }
}
