import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

export const routes: Routes = [
    // Se a path for vazia ele vai para a home
    { path: '', component: HomeComponent},
    // Quando colocarmos http://localhost:4200/nova-rota irá para o componente rota
    { path: 'nova-rota', component: RotaComponent},
    // O path 
    { path: 'client/:id', component:ClientDetailComponent},
    // O ** significa que qualquer outra coisa além do vazio e nova-rota irá para esse
    { path: '**', component: HomeComponent}
];
