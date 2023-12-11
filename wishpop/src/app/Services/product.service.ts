import { Injectable } from '@angular/core';
import { iAddProduct, iProduct } from '../Models/i-product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

prodArr: iProduct[] = []

addProduct (prod:iAddProduct){
return this.http.post(`${environment.apiUrl}/products`,prod)
}

getCategories () {
  return this.http.get<iProduct[]>(`${environment.apiUrl}/categories`)
}

}
