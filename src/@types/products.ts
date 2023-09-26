declare type Products = Product[];

declare interface Product {
  id?: string;
  title: string;
  price: number;
  images?: string[];
  description: string;
  category: string;
  features?: string[];
  youtubeURLs?: string[];
  recommend?: RecommandType<string>;
}

declare type RecommandType<T> = [...T[]];
// price는 string으로 저장되어야함. number로 저장하면 0이 사라짐
// id는 add할때는 자동으로 들어가서 optional로 설정
// recommand는 3개의 string(다른 product의 id값)으로 이루어진 배열로 저장되어야함
