import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private apiUrl = 'http://localhost:8082/api/admin/bloc';

  constructor(private http: HttpClient) {}

  addBlocToChapitre(chapitreId: number, bloc: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add/${chapitreId}`, bloc);
  }

  getBlocsByChapitre(chapitreId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/chapitre/${chapitreId}`);
  }

  deleteBloc(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
