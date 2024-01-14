// survey.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer'; // Import the Answer interface or model

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:3000/api/answers'; // Adjust the URL based on your backend endpoint

  constructor(private http: HttpClient) {}

  saveAnswer(newAnswerData: any): Observable<Answer> {
    return this.http.post<Answer>(`${this.apiUrl}`, newAnswerData);
  }

  getAllAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.apiUrl}`);
  }

  getAnswersByName(name: string): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.apiUrl}/${name}`);
  }
}
