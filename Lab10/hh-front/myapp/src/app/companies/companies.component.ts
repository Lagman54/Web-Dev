import { Component, OnInit } from '@angular/core';
import { HhService } from '../hh.service';
import { Company } from '../company';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  
  companies!: Company[]

  constructor(
    private hhService: HhService
  ) {}

  ngOnInit(): void {
    this.hhService.getCompanyList().subscribe(data => this.companies = data)
  }

}
