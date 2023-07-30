export interface CocktailListItem {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

export interface CocktailList {
  drinks: CocktailListItem[]
}

export interface CocktailCategoryItem {
  strCategory: string
}

export interface CocktailCategoryList {
  drinks: CocktailCategoryItem[]
}
