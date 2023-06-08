import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanysService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  addCompany(addCompanyRequest: Company): Observable<Company> {
    addCompanyRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Company>(this.baseApiUrl + '/api/companys', addCompanyRequest);
  }

  getAllCompanys(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseApiUrl + '/api/companys');
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.baseApiUrl + '/api/companys/' + id);
  }

  updateCompany(id: string, updateCompanyRequest: Company): Observable<Company> {
    return this.http.put<Company>(this.baseApiUrl + '/api/companys/' + id, updateCompanyRequest);
  }

  deleteCompany(id: string): Observable<Company> {
    return this.http.delete<Company>(this.baseApiUrl + '/api/companys/' + id);
  }
}
