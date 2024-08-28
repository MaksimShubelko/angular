export interface ProductFilter {
  'price_gte'?: string,
  'price_lte'?: string,
  'rating.rate_gte'?: string,
  'rating.rate_lte'?: string,
  'stock_gt'?: string,
  'reviews.length_ne'?: string,
  '_embed'?: string,
}
