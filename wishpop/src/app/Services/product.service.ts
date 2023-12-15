import { Injectable } from '@angular/core';
import { iCategory, iProduct } from '../Models/i-product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
// ARRAY DI PRODOTTI LOCALE
prodArr: iProduct[] = []
// URL DI JSON SERVER
prodUrl:string = environment.apiUrl + '/products';
catUrl:string = environment.apiUrl + '/categories';
catSearched:string = '';
productSubject:Subject <iProduct> = new Subject ();
product$ = this.productSubject.asObservable();


// METODO PER PRENDERE TUTTI I PRODOTTI
getProducts(){
  return this.http.get<iProduct[]>(this.prodUrl)
}

// METODO PER AGGIUNGERE I PRODOTTI
addProduct (prod:Partial<iProduct>){
return this.http.post(this.prodUrl,prod)
}

// METODO PER PRENDERE LE CATEGORIE
getCategories () {
  return this.http.get<iCategory[]>(this.catUrl)
}

getProductByCat(name:string){
  return this.http.get<iProduct[]>(`${this.prodUrl}?cat=${name}`)
}

getProductByUser(userId:string){
return this.http.get<iProduct[]>(`${this.prodUrl}?userId=${userId}`)
}

getProductById(id:number){
return this.http.get<iProduct>(`${this.prodUrl}/${id}`)
}

setProduct(product:iProduct){
  this.productSubject.next(product)
}

deleteProduct(id:number){
  return this.http.delete(`${this.prodUrl}/${id}`)
}



}
