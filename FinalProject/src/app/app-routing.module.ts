import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'signup',
    component: SignupComponent 
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/edit/:id',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
