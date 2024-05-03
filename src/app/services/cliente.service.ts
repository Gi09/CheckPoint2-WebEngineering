import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Variável global para indicar o EndPoint para fazer a comunicação
  private apiUrl = 'http://localhost:3000/clientes';
  // Injeção de dependência
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

  getById(id:string): Observable<Cliente>{
    return this.http.get(`${this.apiUrl}/${id}`) as Observable<Cliente>
  }

  remover(id:string){
    // const cliente = this.clientes.find(c => c.id == id);

    // if(cliente){
    //   const index = this.clientes.indexOf(cliente);
    //   this.clientes.splice(index,1);
    // }
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  // Cabeçalho 
  httpHeader = {
    headers:{
      "Content-Type":"application/json"
    }
  };
  adicionar(cliente:Cliente){
    // console.log(cliente)
    return this.http.post(this.apiUrl, cliente, this.httpHeader)
    // this.clientes.push(cliente); -> insere na collection
  }

  atualizar(cliente:Cliente){
    return this.http.put(`${this.apiUrl}/${cliente.id}`, cliente, this.httpHeader)
  }
}
