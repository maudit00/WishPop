import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { iAddress, iTransaction, iUser } from '../../../Models/i-user';
import { iProduct } from '../../../Models/i-product';
import { ProductService } from '../../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  constructor(private authService: AuthService, private productService: ProductService, private active: ActivatedRoute, private router: Router) {
    this.active.params.subscribe(params => {
      this.productService.getProductById(params['id']).subscribe(res => {
        res ? this.product = res : null
      })
    })
    this.getUser()
  }


  user!: iUser;
  product: iProduct = {
    id: 0,
    userId: '',
    name: '',
    description: '',
    price: 0,
    discount: 0,
    image: '',
    category: '',
    conditions: ''
  }
  paypal: boolean = false;
  payment: string = ''
  transaction: iTransaction = {
    transaction: {
      amount: 0,
      type: '',
      date: new Date()
    }
  }
  total: number = 0

  onChange(e: any) {
    this.payment = e.target.value
    if (e.target.value == 'paypal') this.paypal = true
    else this.paypal = false
  }
  getProduct() {
    this.productService.product$.subscribe(product => this.product = product)
  }
  getUser() {
    this.authService.user$.subscribe((user) => user ? this.user = user : null)
  }

  joinAddress(address: iAddress) {
    return `${address.state}, ${address.city}, ${address.province}, (${address.cap}) ${address.street}, ${address.number}`
  }

  buy() {
    let total = this.user.cart ? this.totalprice() : this.product.price
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
