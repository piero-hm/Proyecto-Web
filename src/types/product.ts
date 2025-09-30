export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Pan' | 'Torta' | 'Postre' | 'Bebida';
  image: string;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
}
