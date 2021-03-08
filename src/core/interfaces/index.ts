export interface IProduct {
  id: number;
  title: string;
  image_url: string;
  price: number;
}

export interface ICartItem extends IProduct {
  count?: number;
}
