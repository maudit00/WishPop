import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iProduct } from '../../../Models/i-product';
import { iUser, iTransaction, iAddress } from '../../../Models/i-user';
import { AuthService } from '../../../Services/auth.service';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-cartcheckout',
  templateUrl: './cartcheckout.component.html',
  styleUrl: './cartcheckout.component.scss'
})
export class CartcheckoutComponent {

  constructor(private authService: AuthService, private productService: ProductService, private active: ActivatedRoute, private router: Router) {
    this.getUser()
  }


  user!: iUser;
  total: number = 0
  cart:iProduct[] = []
  transaction:iTransaction = {
    transaction: {
      amount: 0,
      type: '',
      date: new Date()
    }
  }
  payment: string = ''
  paypal:boolean = false

  onChange(e: any) {
    this.payment = e.target.value
    if (e.target.value == 'paypal') this.paypal = true
    else this.paypal = false
  }

  getUser() {
    this.authService.user$.subscribe((user) => {
      user ? this.user = user : null
      this.cart = user?.cart? user.cart : []
      this.total = this.totalprice()
    })
  }

  joinAddress(address: iAddress) {
    return `${address.state}, ${address.city}, ${address.province}, (${address.cap}) ${address.street}, ${address.number}`
  }

  buy() {
    let total = this.total
    this.transaction.transaction.amount = total
    this.transaction.transaction.type = 'Purchase'
    this.transaction.transaction.date = new Date()
    if (!this.user.out) this.user.out = []
    let updatedUser = { ...this.user, balance: this.user.balance - total, out: [...this.user.out, this.transaction] }
    this.authService.updatedUser(updatedUser).subscribe(res => res)
    this.router.navigate(['/dashboard'])
  }

   totalprice():number {
   return this.user.cart.reduce((c, p) => c + Number(p.price), 0)
  }

}
