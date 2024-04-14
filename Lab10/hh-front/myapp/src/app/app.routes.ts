import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const routes: Routes = [
    { path: 'companies', component: CompaniesComponent},
    { path: 'companies/:id/vacancies', component: VacanciesComponent},
];
