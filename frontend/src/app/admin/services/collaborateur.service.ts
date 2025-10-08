import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  private baseUrl = 'http://localhost:8082/api/admin';
  
    constructor(private http: HttpClient) {}
  
    getCollaborateurs(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/collaborateur`);
    }
  
    addCollaborateur(user: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/add-collaborateur`, user);
    }
    deleteCollaborateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-collaborateur/${id}`);
  }
  updateCollaborateur(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-collaborateur/${id}`, user);
  }
  
  resetPassword(id: number) {
    return this.http.put<any>(`http://localhost:8082/api/admin/reset-password/${id}`, {});
  }
}
