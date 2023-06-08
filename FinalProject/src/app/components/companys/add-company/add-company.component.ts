import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanysService } from 'src/app/services/companys.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  addCompanyRequest: Company = {
    id: '',
    name: '',
    location: '',
    nrEmployees: 0
  }

  constructor(private companyService: CompanysService, private router: Router){}

  ngOnInit(): void {
  }

  addCompany(){
    this.companyService.addCompany(this.addCompanyRequest)
    .subscribe({
      next: (company) => {
        this.router.navigate(['companys']);
      }
    });
  }

}
