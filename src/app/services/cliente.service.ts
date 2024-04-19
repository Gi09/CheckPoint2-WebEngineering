import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  // Vamos criar uma lista da interface Cliente
  clientes:Cliente[] = [
    {id: "primeiroTeste", nome : "Giovanna Sayuri"},
    {id: "segundoTeste", nome : "Matheus Fuchelberguer", telefone:"123456789"}
  ];

  listar():Cliente[]{
    // console.log(this.clientes);
    return this.clientes;
  }

  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index,1);
    }
  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
