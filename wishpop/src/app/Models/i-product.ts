export interface iProduct {
  id:number;
  name:string;
  description:string;
  price:number;
  discount:number;
  image:string;
  category:string;
  conditions:string;
}

export interface iAddProduct {
  name:string;
  description:string;
  price:number;
  image:string;
  category:string;
  conditions:string;
}

export interface iCategory {
  id:number;
  name:string;
  color:string;
}
