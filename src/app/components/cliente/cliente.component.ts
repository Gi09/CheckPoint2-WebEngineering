import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clientes:Cliente[]=[];
  clienteForm: FormGroup = new FormGroup({})

  constructor(private clienteService:ClienteService, private formBuilder: FormBuilder){
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  // gera o id por meio do Random
  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } 

  // Método para inserção
  inserir(){
    if(this.clienteForm.valid){
      const clienteNovo: Cliente = {
        nome: this.clienteForm.value.nome,
        telefone: this.clienteForm.value.telefone,
        id: this.generateRandomString(6)
      }
      // Limpa o formulário após inserção
      this.clienteForm.reset()
      this.clienteService.adicionar(clienteNovo)
      alert('Cliente cadastrado com sucesso!')
    }
  }

  // Método para listar
  listar():void{
    this.clienteService.listar().subscribe((ListaClient) => (this.clientes = ListaClient));    
    // console.log(this.clientes)
  }

  // Método para remover
  remover(id:string): void{
    this.clienteService.remover(id);
    alert("Cliente removido com sucesso!")
  }

  ngOnInit():void{
    // console.log("giovanna")
    this.listar();
  }
}
