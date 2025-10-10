import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Attribution } from '../../models/attribution.model';
import { QcmDto } from '../../models/qcm-dto.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

private apiUrl = `${environment.apiUrl}/api/candidat`;

constructor(private http: HttpClient) {}

getMyTests(): Observable<Attribution[]> {
    return this.http.get<Attribution[]>(`${this.apiUrl}/tests`);
  }
  getQcm(qcmId: number): Observable<QcmDto> {
    return this.http.get<QcmDto>(`${this.apiUrl}/qcm/${qcmId}`);
  }

  submitQcm(submission: { qcmId: number, answers: number[] }): Observable<string> {
    return this.http.post(`${this.apiUrl}/qcm/submit`, submission, { responseType: 'text' });
  }
  getProbleme(problemeId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/probleme/${problemeId}`);
}

submitProbleme(submission: { problemeId: number, code: string }): Observable<string> {
  return this.http.post(`${this.apiUrl}/probleme/submit`, submission, { responseType: 'text' });
}

}
