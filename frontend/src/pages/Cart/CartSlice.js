import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, imgSrc, price, name, quantity } = action.payload;
    
      const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
      
        state.cartItems[existingItemIndex].quantity += quantity;
      } else {
      
        state.cartItems.push({ id, imgSrc, price, name, quantity });
      }
    
      state.cartTotalQuantity += quantity;
      state.cartTotalAmount += price * quantity;
    },
    incrementQuantity(state, action) {
      const { itemId } = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
        state.cartTotalQuantity++;
        state.cartTotalAmount += item.price;
      }
    },
    decrementQuantity(state, action) {
      const { itemId } = action.payload;
      const item = state.cartItems.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.cartTotalQuantity--;
        state.cartTotalAmount -= item.price;
      }
    },
    updateTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    removeItem(state, action) {
      const { itemId } = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        const removedItem = state.cartItems[itemIndex];
        state.cartItems.splice(itemIndex, 1);
        state.cartTotalQuantity -= removedItem.quantity;
        state.cartTotalAmount -= removedItem.quantity * removedItem.price;
      }
    }
  }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, updateTotalAmount } = cartSlice.actions;

export default cartSlice.reducer;
