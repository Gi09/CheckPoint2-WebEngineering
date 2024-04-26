import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})

export class ClientDetailComponent {
  // Construtor
  constructor(private route: ActivatedRoute){
    this.getClientById()
  }
  
  id?:string;

  getClientById(){
    // Recupera tudo que passar na rota e retorna aqui
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    alert(this.id);
  }
}
