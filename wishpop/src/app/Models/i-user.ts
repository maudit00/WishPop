export interface iUser {
  id:string
  nome:string
  email:string
  password:string | null
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
  email:string;
  password:string;
  adress:iAddress;
  favPayMethod:string;
}
