export interface iUser {
  id:string
  nome:string
  email:string
  password:string
  address: iAddress
  favPayMethod : string
  balance:number;
  level:string;
  transaction:iTransaction
  feedback:number
}

export interface iAddress {
  state:string;
  city:string;
  cap:number;
  street:string;
  number:number;
}

export interface iTransaction {
  in:number;
  out:number;
}
