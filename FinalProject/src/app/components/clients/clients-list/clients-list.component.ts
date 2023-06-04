import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit{

  clients: Client[] = [];
  
  constructor () {}

  ngOnInit(): void {
    
  }

}
