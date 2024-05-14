

import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./ProductSlice/productsSlice";
import cartSlice from "./ProductSlice/Cart"
import favoritesSlice from "./ProductSlice/FavoritesSlice"

export const store =configureStore({
  reducer:{
    products:productsSlice,
    cart:cartSlice,
    favorites:favoritesSlice
    
  }
})