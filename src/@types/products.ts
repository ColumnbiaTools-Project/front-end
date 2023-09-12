declare type Products = Product[];

declare interface Product {
  id?: string;
  title: string;
  price: string;
  image?: string;
  detailImage?: string;
  description: string;
  category: string;
  feature?: string;
  youtube?: string;
}
// price는 string으로 저장되어야함. number로 저장하면 0이 사라짐
// id는 add할때는 자동으로 들어가서 optional로 설정

