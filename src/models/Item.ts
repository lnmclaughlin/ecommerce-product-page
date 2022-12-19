export default interface Item {
  image?: string;
  id: string;
  name: string;
  description: string;
  price?: number;
  discountPrice?: number;
  discount?: number;
  originalPrice?: number;
}
