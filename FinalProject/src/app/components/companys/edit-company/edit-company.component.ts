import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanysService } from 'src/app/services/companys.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent {

  companyDetails: Company = {
    id: '',
    name: '',
    location: '',
    nrEmployees: 0
  }

  constructor(private route: ActivatedRoute, private companyService: CompanysService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.companyService.getCompany(id)
          .subscribe({
            next: (response) => {
              this.companyDetails = response;
            }
          });
        }
      }
    })
  }

  updateCompany(){
    this.companyService.updateCompany(this.companyDetails.id, this.companyDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['companys']);
      }
    });
  }

  deleteCompany(id: string) {
    this.companyService.deleteCompany(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['companys']);
      }
    });
  }

}
