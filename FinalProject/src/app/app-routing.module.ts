import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';

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
  },
  {
    path: 'clients/edit/:id',
    component: EditClientComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
