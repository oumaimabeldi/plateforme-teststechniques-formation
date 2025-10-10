import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QcmService {

  private apiUrl = `${environment.apiUrl}/api/admin/qcm`;

  constructor(private http: HttpClient) {}

  
  createQcm(qcm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, qcm);
  }

  getAllQcm(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  deleteQcm(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
