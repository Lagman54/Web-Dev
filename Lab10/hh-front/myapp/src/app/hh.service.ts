import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './company';

@Injectable({
  providedIn: 'root'
})
export class HhService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl = 'http://127.0.0.1:8000/api/v1'

  getCompanyList(): Observable<Company[]> {
    const url = `${this.baseUrl}/companies`
    return this.http.get<Company[]>(url)
  }

  getVacanciesOfCompany(id: number): Observable<Vacancy[]> {
    const url = `${this.baseUrl}/companies/${id}/vacancies`
    return this.http.get<Vacancy[]>(url)
  }

}
