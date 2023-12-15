import { iTransaction, iUser } from '../../../Models/i-user';
import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
constructor(private authService: AuthService) {
  this.authService.user$.subscribe(user => {
    user ? this.user = user : null
    this.orders = user?.out? user.out : []
  })
}

user!:iUser;
orders:iTransaction[] = []

countOrders () {

}


}
