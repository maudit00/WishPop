export interface iProduct {
  id:number;
  userId:string;
  name:string;
  description:string;
  price:number;
  discount:number;
  image:string;
  category:string;
  conditions:string;
}

export interface iCategory {
  id:number;
  name:string;
  color:string;
}
