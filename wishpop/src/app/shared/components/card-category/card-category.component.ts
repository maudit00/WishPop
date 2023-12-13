import { Component, Input } from '@angular/core';
import { iCategory } from '../../../Models/i-product';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss'
})
export class CardCategoryComponent {

  @Input () cat!:iCategory
}
