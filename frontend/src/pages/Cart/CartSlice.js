import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  totalAmount: 0,
  heartCount: 0,
  clickedProduct: null,
  likedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, imgSrc, price, name, quantity } = action.payload;

      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, imgSrc, price, name, quantity });
      }

      state.cartTotalQuantity += quantity;
      state.totalAmount += price * quantity;
      state.heartCount++;
    },
    incrementQuantity(state, action) {
      const { itemId } = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
        state.cartTotalQuantity++;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity(state, action) {
      const { itemId } = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.cartTotalQuantity--;
        state.totalAmount -= item.price;
      }
    },
    updateTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    removeItem(state, action) {
      const { itemId } = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        const removedItem = state.cartItems[itemIndex];
        state.cartItems.splice(itemIndex, 1);
        state.cartTotalQuantity -= removedItem.quantity;
        state.totalAmount -= removedItem.quantity * removedItem.price;
      }
    },
    incrementHeartCount(state) {
      state.heartCount++;
    },
    updateClickedProduct(state, action) {
      state.clickedProduct = action.payload;
    },
    addToHeart(state, action) {
      const itemToAdd = action.payload;
      state.likedItems.push(itemToAdd);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  updateTotalAmount,
  incrementHeartCount,
  updateClickedProduct,
  addToHeart,
} = cartSlice.actions;

export default cartSlice.reducer;
