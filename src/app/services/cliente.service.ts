import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';
  constructor(private http:HttpClient) { }

  // Vamos criar uma lista da interface Cliente
  clientes:Cliente[] = [
    {id: "primeiroTeste", nome : "Giovanna Sayuri"},
    {id: "segundoTeste", nome : "Matheus Fuchelberguer", telefone:"123456789"}
  ];

  // Retornará os mesmos clientes porém virão de uma API
  listar(): Observable<Cliente[]>{
    // console.log(this.clientes);
    // return this.clientes;
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>;
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
