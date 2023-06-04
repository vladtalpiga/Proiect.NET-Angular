import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit{

  clients: Client[] = [
    {
      id: '73085ca2-9e6e-4a9d-831a-63c836fca0bc', 
      name: 'Vlad',
      email: 'vlad@email.com',
      age: 20,
      money: 10000
    },
    {
      id: 'b23d3a5a-8b7f-4e46-ac97-5d32094a9c21', 
      name: 'Laura',
      email: 'laura@email.com',
      age: 18,
      money: 2000
    },
    {
      id: 'c05f8e4d-3749-4ff5-8404-61f793310324', 
      name: 'Razvan',
      email: 'razvan@email.com',
      age: 35,
      money: 17500
    },
    {
      id: 'b6480c80-ba79-46b4-8e0b-bf2013bf7a41', 
      name: 'Ioana',
      email: 'ioana@email.com',
      age: 25,
      money: 9000
    }
  ];
  
  constructor () {}

  ngOnInit(): void {
    
  }

}
