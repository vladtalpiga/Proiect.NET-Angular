import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsListComponent 
  },
  {
    path: 'clients',
    component: ClientsListComponent 
  },
  {
    path: 'clients/add',
    component: AddClientComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
