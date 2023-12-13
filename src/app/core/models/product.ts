import { Cour } from "./cour";

export interface Product {
  title: string;
  subtitle: string;
  level: number;
  cours: Cour[];
  price_month: number;
  price_year: number;
}
