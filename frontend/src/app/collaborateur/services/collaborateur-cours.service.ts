import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurCoursService {
  private apiUrl = 'http://localhost:8082/api/collaborateur/cours';
  constructor(private http:HttpClient ) { }

  getCoursAttribues(collaborateurId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/assigned/${collaborateurId}`);
  }
    getCoursById(coursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${coursId}`);
  }
}
