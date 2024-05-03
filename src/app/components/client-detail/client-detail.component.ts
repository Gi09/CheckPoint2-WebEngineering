import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})

export class ClientDetailComponent {
  cliente?:Cliente
  clienteForm: FormGroup = new FormGroup({})
  // Construtor
  constructor(private route: ActivatedRoute, private clienteService:ClienteService, private formbuilder:FormBuilder){
    this.getClientById()
  }
  
  id?:string;
  getClientById(){
    // Recupera tudo que passar na rota e retorna aqui
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    // alert(this.id);
    this.clienteService.getById(this.id).subscribe((clienteResponse) => this.cliente = clienteResponse)
    // Pegar o formulário
    this.clienteForm = this.formbuilder.group({
      nome: [this.cliente?.nome],
      telefone: [this.cliente?.telefone],
      id: [this.cliente?.id]
    })
  }

  update():void{
    if(this.clienteForm.valid){
      const clienteNovo: Cliente = {
        nome: this.clienteForm.value.nome,
        telefone: this.clienteForm.value.telefone,
        id: this.clienteForm.value.id
      }
      this.clienteService.atualizar(clienteNovo).subscribe()
      alert("Alterado com sucesso!")
    }
  }
}
