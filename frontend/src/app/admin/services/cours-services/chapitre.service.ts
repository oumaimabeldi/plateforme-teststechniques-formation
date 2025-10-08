import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  private apiUrl = 'http://localhost:8082/api/admin/chapitre';

  constructor(private http: HttpClient) {}

  addChapitreToCours(coursId: number, chapitre: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add/${coursId}`, chapitre);
  }

  getChapitresByCours(coursId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cours/${coursId}`);
  }

  deleteChapitre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
