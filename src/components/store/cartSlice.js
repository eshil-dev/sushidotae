import { createSlice } from '@reduxjs/toolkit'

// init the initial State to local and check if the user already added to cart 
const cartLocal = JSON.parse(localStorage.getItem('cart'))
let cartinit = null;
cartLocal ? cartinit = cartLocal: cartinit = [];

const initialState = {
  cart: cartinit,
  user: []
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart = [...state.cart, {...action.payload, qty:1}]

      // add cart to localstorage
      toLocalStorage(state.cart)
    },

    decreaseItem: (state, action) => {
      // find the index of the item and decreament the qty
      const index = state.cart.findIndex(ele => ele.id === action.payload.id);
      let new_qty = state.cart[index].qty;
      // check if the qty of the item is 1, decrement should remove it from store
      new_qty = new_qty-1
      if(new_qty === 0){
        // get all the items from cart store except this this.
        const filteredState = state.cart.filter(i => i.id !== action.payload.id)
        state.cart = [...filteredState]
      }else{
        // otherwise, decrement the qty of the item.
        const filteredState = state.cart.filter(i => i.id !== action.payload.id)
        state.cart = [...filteredState, {...action.payload, qty:new_qty}]
      }

      // add cart to localstorage
      toLocalStorage(state.cart)
    },

    increaseItem: (state, action) => {
      // find the index of the item and decreament the qty
      const index = state.cart.findIndex(ele => ele.id === action.payload.id);
      let new_qty = state.cart[index].qty;
      new_qty = new_qty+1
      // otherwise, increment the qty of the item.
      const filteredState = state.cart.filter(i => i.id !== action.payload.id)
      state.cart = [...filteredState, {...action.payload, qty:new_qty}]  
      
      // add state to local storage
      toLocalStorage(state.cart)
    },
    removeItem: (state,action) =>{
      // get all the items from cart store except this item passed.
      const filteredState = state.cart.filter(i => i.id !== action.payload.id)
      state.cart = [...filteredState]

      // add to localstorage
      toLocalStorage(state.cart)
    }
  },
})


function toLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("cart added to local storage")

}

// Action creators are generated for each case reducer function
export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions

export default cartSlice.reducer

