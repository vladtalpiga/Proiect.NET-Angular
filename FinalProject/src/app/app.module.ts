import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { FormsModule } from '@angular/forms';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    AddClientComponent,
    EditClientComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
