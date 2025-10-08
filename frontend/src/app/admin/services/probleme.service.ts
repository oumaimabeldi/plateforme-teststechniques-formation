import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProblemeService {

    private apiUrl = 'http://localhost:8082/api/admin/problemes';

  constructor(private http: HttpClient) {}

  createProbleme(probleme: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, probleme);
  }
    getAllProblemes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
  deleteProbleme(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/delete/${id}`);
}

}
