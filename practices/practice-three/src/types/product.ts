export interface IProduct {
  id: string;
  name?: string;
  price: number;
  category?: string;
  brand?: string;
  ratings?: number;
  size: string;
  currency?: string;
  quantity: number;
  reviews?: IReviews[];
  colors?: string[];
  description?: string;
  information?: string[];
  images?: string[];
  color: string;
}

export interface IReviews {
  id: number;
  reviewer: string;
  comments: string;
}
