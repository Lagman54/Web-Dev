import { Component, OnInit } from '@angular/core';
import { HhService } from '../hh.service';
import { Vacancy } from '../company';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent implements OnInit {

  vacancies!: Vacancy[]

  constructor(
    private route: ActivatedRoute,
    private hhService: HhService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const companyId = Number(routeParams.get('id'))

    this.hhService.getVacanciesOfCompany(companyId).subscribe(data => this.vacancies = data)
  }

}
