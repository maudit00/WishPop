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
  transaction:iTransaction
  feedback:number
  firstTime:boolean;
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
  in:number;
  out:number;
}

export interface iAddInfo {
  id:string;
  nome:string;
  cognome:string;
  email:string;
  password:string;
  address:iAddress;
  favPayMethod:string;
  firstTime:boolean;
}
