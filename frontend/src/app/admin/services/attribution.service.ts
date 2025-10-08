import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AttributionService {
  private baseUrl = 'http://localhost:8082/api/admin';

  constructor(private http: HttpClient) {}

  assignTests(payload: { candidatId: number; qcmIds: number[]; problemeIds: number[]; durationMinutes?: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/assign-tests`, payload);
  }

  getAssignmentsByCandidat(candidatId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/assignments/${candidatId}`);
  }
  getAllAssignments(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/assignments`);
}

deleteAssignment(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/assignments/${id}`);
}

}
