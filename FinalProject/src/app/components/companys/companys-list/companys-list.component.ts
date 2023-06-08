import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanysService } from 'src/app/services/companys.service';

@Component({
  selector: 'app-companys-list',
  templateUrl: './companys-list.component.html',
  styleUrls: ['./companys-list.component.css']
})
export class CompanysListComponent implements OnInit{

  companys: Company[] = [];
  
  constructor (private companysService: CompanysService) {}

  ngOnInit(): void {
    this.companysService.getAllCompanys()
    .subscribe({
      next: (companys) => {
        this.companys = companys;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
