import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem, removeItem, clearStorage } from "../../core/services/local-storage/LocalStorage";

const initialState = {
  value: getItem("cartItems") ? getItem("cartItems") : [],
};

const addToCart = (state, action) => {
  let exist = state.value.find((obj) => obj.id === action.payload.id);

  if (exist != undefined) alert();
  else state.value = [...state.value, action.payload];
  setItem("cartItems", state.value)
};

const removeFromCart = (state, action) => {
  state.value = state.value.filter((obj) => obj.id != action.payload);
  removeItem("cartItems")
};

const changeAmountItem = (state, action) => {
  let exist = state.value.find((obj) => obj.id === action.payload.id);
  let getIndex = state.value.indexOf(exist);

  state.value[getIndex].amount = action.payload.productAmount;
};

const clearCart = (state) => {
  state.value.length = 0;
  clearStorage()
};

const CartData = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
    removeFromCart,
    changeAmountItem,
    clearCart,
  },
});

export const {
  addToCart: addToCartAction,
  removeFromCart: removeFromCartAction,
  changeAmountItem: changeAmountItemAction,
  clearCart: clearCartAction,
} = CartData.actions;

export default CartData.reducer;
