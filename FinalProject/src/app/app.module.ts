import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { CompanysListComponent } from './components/companys/companys-list/companys-list.component';
import { AddCompanyComponent } from './components/companys/add-company/add-company.component';
import { EditCompanyComponent } from './components/companys/edit-company/edit-company.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    AddClientComponent,
    EditClientComponent,
    LoginComponent,
    SignupComponent,
    UsersListComponent,
    EditUserComponent,
    CompanysListComponent,
    AddCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
