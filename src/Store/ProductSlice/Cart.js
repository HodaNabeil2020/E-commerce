
import { createSlice } from "@reduxjs/toolkit";
function getItemLocalStorage () {
  const getItem= localStorage.getItem("card");
  return getItem ? JSON.parse(getItem) :[]
}

function setItemLocalStorage (card) {
localStorage.setItem("card" ,JSON.stringify(card))
}

const cartSlice = createSlice({
  name: "cart",
  initialState:getItemLocalStorage (),
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price, selectSize, color , quantity ,discount} = action.payload;

      const findProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize && product.color === color
      );

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({
          id,
          title,
          image,
          price,
          selectSize,
          color,
          quantity,
          discount
        });
      }
      setItemLocalStorage(state)
    },
    deleteFromCart: (state, action) => {
      const { id, selectSize  ,color} = action.payload;

      const updateCart = state.filter(
        (product) => !(product.id === id && product.selectSize === selectSize && product.color === color)
      );
      setItemLocalStorage([...updateCart])
      return updateCart;
    },

    increaseQuantity: (state, action) => {
      const { id, selectSize, color ,} = action.payload;

      const increaseProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize &&  product.color === color
      );

      if (increaseProduct) {
        increaseProduct.quantity += 1;
      }
      setItemLocalStorage(state)
    },

    decreaseQuantity: (state, action) => {
      const { id, selectSize, color  } = action.payload;

      const decreaseProduct = state.find(
        (product) => product.id === id && product.selectSize === selectSize && product.color === color
      );

      if (decreaseProduct && decreaseProduct.quantity > 1) {
        decreaseProduct.quantity -= 1;
      }
      setItemLocalStorage(state)
    },

    clearProduct: (state, action) => {
      localStorage.removeItem("card")
      return []
    
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearProduct,
} = cartSlice.actions;

export default cartSlice.reducer;