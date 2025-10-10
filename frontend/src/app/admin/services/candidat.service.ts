import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

 private baseUrl = `${environment.apiUrl}/api/admin`;

  constructor(private http: HttpClient) {}

  getCandidats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/candidats`);
  }

  addCandidat(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-candidat`, user);
  }
  deleteCandidat(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/delete-candidat/${id}`);
}
updateCandidat(id: number, user: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-candidat/${id}`, user);
}

resetPassword(id: number) {
  return this.http.put<any>(`http://localhost:8082/api/admin/reset-password/${id}`, {});
}

}
