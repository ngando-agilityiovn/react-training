export interface IProductCard {
  id: string;
  images: string[];
  name: string;
  currency: string;
  price: number;
  quantity: number;
  reviews: string[];
  ratings: number;
}

export interface IProduct extends IProductCard {
  category?: string;
  brand?: string;
  size: string;
  colors?: string[];
  description?: string;
  information?: string[];
  color: string;
}

export interface IReviews {
  id: number;
  reviewer: string;
  comments: string;
}
