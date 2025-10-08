import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private apiUrl = 'http://localhost:8082/api/admin/cours';

  constructor(private http: HttpClient) {}

  createCours(cours: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, cours);
  }

  getAllCours(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getCoursById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteCours(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  assignQcmToCours(coursId: number, qcmId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign-qcm/${coursId}/${qcmId}`, {});
  }
}
