import { Injectable } from "@angular/core";
import { Fornecedor } from "../interfaces/Fornecedor";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FornecedorService{
    // URL da API para acesso ao fornecedor
    private apiUrl = 'http://localhost:3000/fornecedores';

    constructor(private http:HttpClient){}

    // Lista para os dados do fornecedor
    fornecedores:Fornecedor[] = [
        {id: "primeiro teste", nome:"Giovanna", endereco:"Fiap", telefone:"1234567"},
        {id: "segundo teste", nome:"Matheus", endereco:"Fiap", telefone:"1234567845678"}
    ];

    // Cabeçalho
    httpHeader = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    getById(id:string): Observable<Fornecedor>{
        return this.http.get(`${this.apiUrl}/${id}`) as Observable<Fornecedor>
      }

    // Método para adicionar
    adicionar(fornecedor:Fornecedor){
        return this.http.post(this.apiUrl, fornecedor, this.httpHeader)
    }

    // Método para listar
    listar():Observable<Fornecedor[]>{
        return this.http.get<Fornecedor[]>(this.apiUrl) as Observable<Fornecedor[]>;
    }

    // Método para atualizar
    atualizar(fornecedor:Fornecedor){
        return this.http.put(`${this.apiUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
    }

    // Método para excluir
    remover(id:string){
        return this.http.delete(`${this.apiUrl}/${id}`)
    }
}