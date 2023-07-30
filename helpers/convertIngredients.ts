import { CocktailItem } from "types/cocktails";

export const convertIngredients = (drinkData?: CocktailItem): string[] => {
  if (!drinkData) {
    return []
  }
  const keys = Object.keys(drinkData);

  const ingredients = keys.reduce((ingredientsAcc, key) => {
    if (key.startsWith("strIngredient")) {
      const ingredient = drinkData[key as keyof CocktailItem];
      if (ingredient) {
        ingredientsAcc.push(ingredient.trim());
      }
    }

    return ingredientsAcc;
  }, [] as string[]);

  return ingredients;
};
