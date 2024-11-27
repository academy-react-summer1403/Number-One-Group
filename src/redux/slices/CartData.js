import { createSlice } from "@reduxjs/toolkit";
import {
  getItem,
  setItem,
  removeItem,
  clearStorage,
} from "../../core/hooks/local-storage";
import { toast } from "react-toastify";

const initialState = {
  value: getItem("cartItems") ? getItem("cartItems") : [],
  Query: undefined,
};

const addToCart = (state, action) => {
  let exist = state.value.find((obj) => obj.id === action.payload.id);

  if (exist != undefined) toast.error("این محصول در سبد شما موجود است!");
  else {
    state.value = [...state.value, action.payload];
    toast.success("محصول با موقیت به سبد شما اضافه شد");
  }
  setItem("cartItems", state.value);
};

const removeFromCart = (state, action) => {
  state.value = state.value.filter((obj) => obj.id != action.payload);
  removeItem("cartItems");
  toast.success("محصول با موفقیت حذف شد");
};

const changeAmountItem = (state, action) => {
  let exist = state.value.find((obj) => obj.id === action.payload.id);
  let getIndex = state.value.indexOf(exist);

  state.value[getIndex].amount = action.payload.productAmount;
};

const clearCart = (state) => {
  state.value.length = 0;
  clearStorage();
  toast.success("محصولات با موفقیت حذف شدند");
};

const handleQuery = (state, action) => {
  state.Query = action.payload;
};

const CartData = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
    removeFromCart,
    changeAmountItem,
    clearCart,
    handleQuery,
  },
});

export const {
  addToCart: addToCartAction,
  removeFromCart: removeFromCartAction,
  changeAmountItem: changeAmountItemAction,
  clearCart: clearCartAction,
  handleQuery: handleQueryAction,
} = CartData.actions;

export default CartData.reducer;
