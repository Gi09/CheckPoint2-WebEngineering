import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})

export class FornecedorComponent {

  fornecedores:Fornecedor[]=[];
  fornecedorForm: FormGroup = new FormGroup({})

  constructor(private fornecedorService:FornecedorService, private formBuilder: FormBuilder){
    this.fornecedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required]
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

  // Método de adicionar
  inserir(){
    if(this.fornecedorForm.valid){
      const fornecedorNovo: Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        telefone: this.fornecedorForm.value.telefone,
        endereco: this.fornecedorForm.value.endereco,
        id:this.generateRandomString(3)
      }
      // Limpeza do Formulário após inserção
      this.fornecedorForm.reset()
      this.fornecedores.push(fornecedorNovo)
      this.fornecedorService.adicionar(fornecedorNovo).subscribe()
      alert("Fornecedor adicionado com sucesso!")
    }
  }

  // Método para listar
  listar():void{
    this.fornecedorService.listar().subscribe((ListaFornecedor) => (this.fornecedores = ListaFornecedor));
  }

  // Método para remover
  remover(id:string):void{
    this.fornecedores = this.fornecedores.filter((f) => f.id !== id)
    this.fornecedorService.remover(id).subscribe();
    alert("Fornecedor removido com sucesso!")
  }

  ngOnInit():void{
    this.listar();
  }
}

