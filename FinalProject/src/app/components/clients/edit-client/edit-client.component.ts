import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {

  clientDetails: Client = {
    id: '',
    name: '',
    email: '',
    age: 0,
    money: 0 
  }

  constructor(private route: ActivatedRoute, private clientService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.clientService.getClient(id)
          .subscribe({
            next: (response) => {
              this.clientDetails = response;
            }
          });
        }
      }
    })
  }

  updateClient(){
    this.clientService.updateClient(this.clientDetails.id, this.clientDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['clients']);
      }
    });
  }

  deleteClient(id: string) {
    this.clientService.deleteClient(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['clients']);
      }
    });
  }

}
