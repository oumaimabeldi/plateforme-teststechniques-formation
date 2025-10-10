import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttributionCoursService {

   private apiUrl = `${environment.apiUrl}/api/admin/attribution-cours`;

  constructor(private http: HttpClient) {}

  assignCoursToCollaborateur(coursId: number, collaborateurId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign/${coursId}/${collaborateurId}`, {});
  }

  getCoursAttribuesPourCollaborateur(collaborateurId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/collaborateur/${collaborateurId}`);
  }

  terminerCours(attributionId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/terminer/${attributionId}`, {});
  }
}
