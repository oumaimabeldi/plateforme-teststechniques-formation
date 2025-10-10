import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private apiUrl = `${environment.apiUrl}/api/admin/bloc`;

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
