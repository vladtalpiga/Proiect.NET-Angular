import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientComponent } from './components/clients/add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
