import { Component, Input } from '@angular/core';
import { iCategory } from '../../../Models/i-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss'
})
export class CardCategoryComponent {
  constructor(private route:Router){}
  @Input () cat!:iCategory

  goTo (id:number){
    this.route.navigate(['/home/categories',id])
  }


}
