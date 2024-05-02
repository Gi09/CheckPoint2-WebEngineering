import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbgeService } from '../../services/ibge.service';


@Component({
  selector: 'app-ibge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ibge.component.html',
  styleUrl: './ibge.component.css'
})
export class IbgeComponent {

  estados: any[] = [];

  constructor(private ibgeService: IbgeService){
    
  }

  ngOnInit():void{
    this.get_Estados();
  }

  get_Estados():void{
    this.ibgeService.get_Estados().subscribe(estados => this.estados = estados);
  }
}
