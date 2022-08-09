export interface MainProps {
  products?: ProductsProps[]
}

interface ProductsProps {
  id: number;
  name: string;
  favorite: boolean;
  ImageURL: string;
  listPrice: string;
  salePrice: string;
} 