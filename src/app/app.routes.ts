import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { IbgeComponent } from './components/ibge/ibge.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { FornecedorDetailComponent } from './components/fornecedor-detail/fornecedor-detail.component';

export const routes: Routes = [
    // Se a path for vazia ele vai para a home
    { path: '', component: HomeComponent},
    // Quando colocarmos http://localhost:4200/nova-rota irá para o componente rota
    { path: 'nova-rota', component: RotaComponent},
    // Rota para o cliente detail
    { path: 'client/:id', component:ClientDetailComponent},
    // Rota pro cliente
    { path: 'cliente', component:ClienteComponent},
    // Rota para a tarefa
    { path: 'tarefa', component:TarefaComponent},
    // Rota para o Pokemon
    { path: 'pokemon', component:PokemonComponent}, 
    // Rota para o IBGE
    { path: 'ibge', component:IbgeComponent},
    // Rota para o fornecedor detail
    { path: 'fornecedor/:id', component:FornecedorDetailComponent},
    // Rota para o fornecedor
    { path: 'fornecedor', component:FornecedorComponent},
    // O ** significa que qualquer outra coisa além do vazio e nova-rota irá para esse
    { path: '**', component: HomeComponent}
];
