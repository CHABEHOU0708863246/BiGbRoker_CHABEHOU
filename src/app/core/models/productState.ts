import { Product } from "./product";

export interface ProductState {
  products: Product[] | null | undefined;
  isLoading: boolean;
  error: string;
}
