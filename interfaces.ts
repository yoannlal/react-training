export interface Ingredient {
  name: string;
  amount: number;
  measurement: string;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  rating: number;
  steps: string[];
  uuid: number;
}
