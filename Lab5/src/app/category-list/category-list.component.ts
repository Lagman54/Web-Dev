import { Component } from '@angular/core';
import {categories} from "../categories";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

    protected readonly categories = categories;
}
