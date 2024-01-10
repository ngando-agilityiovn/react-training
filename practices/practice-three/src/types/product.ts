export interface Product {
  id: number
  name: string
  category: string
  brand: string
  rating: number
  size: string
  currency: string
  quantity: number
  reviews: IReviews[]
  color: string[]
  description: string
  information: string[]
  images: string[]
}

export interface IReviews {
  id: number
  reviewer: string
  comments: string
}
