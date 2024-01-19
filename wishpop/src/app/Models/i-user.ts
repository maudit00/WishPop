import { iProduct } from "./i-product"

export interface iUser {
  id:string
  nome:string
  cognome:string
  email:string
  password:string
  address: iAddress
  favPayMethod : string
  balance:number;
  level:string;
  in : iTransaction[]
  out : iTransaction[]
  feedback:number
  firstTime:boolean;
  wishList:iProduct[]
  cart:iProduct[]
  image:string;
}

export interface iAddress {
  state:string;
  city:string;
  province:string;
  cap:number;
  street:string;
  number:number;
}

export interface iTransaction {
  transaction:{
    amount:number
    type:string
    date:Date
  }
}
