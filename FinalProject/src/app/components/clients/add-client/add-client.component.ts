import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  addClientRequest: Client = {
    id: '',
    name: '',
    email: '',
    age: 0,
    money: 0 
  }

  constructor(private clientService: ClientsService, private router: Router){}

  ngOnInit(): void {
  }

  addClient(){
    this.clientService.addClient(this.addClientRequest)
    .subscribe({
      next: (client) => {
        this.router.navigate(['clients']);
      }
    });
  }

}
