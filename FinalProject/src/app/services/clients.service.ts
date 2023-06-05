import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseApiUrl + '/api/clients');
  }

  addClient(addClientRequest: Client): Observable<Client> {
    addClientRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Client>(this.baseApiUrl + '/api/clients', addClientRequest);
  }

  getClient(id: string): Observable<Client> {
    return this.http.get<Client>(this.baseApiUrl + '/api/clients/' + id);
  }

  updateClient(id: string, updateClientRequest: Client): Observable<Client> {
    return this.http.put<Client>(this.baseApiUrl + '/api/clients/' + id, updateClientRequest);
  }

  deleteClient(id: string): Observable<Client> {
    return this.http.delete<Client>(this.baseApiUrl + '/api/clients/' + id);
  }

}
