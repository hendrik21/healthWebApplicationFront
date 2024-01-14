// survey-results.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private apiUrl = '/api';
  private apiKey = '0trQCMsfOuGMb1Mk4ZL92FXrxYr1ZjW8Xnz2TjQ5';

  constructor(private http: HttpClient) {}

  getSurveyResults(userId: string, lang: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey,
    });

    const params = new HttpParams()
      .set('userID', userId)
      .set('lang', lang);

    return this.http.get(`${this.apiUrl}`, { headers, params });
  }
}

