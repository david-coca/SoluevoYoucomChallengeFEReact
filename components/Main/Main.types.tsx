export interface MainProps {
  products?: ProductsProps[]
}

interface ProductsProps {
  id: number;
  name: string;
  favorite: boolean;
  imageURL: string;
  listPrice: string;
  salePrice: string;
} 