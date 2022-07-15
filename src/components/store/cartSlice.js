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
      const newItem = [...state.cart,{...action.payload, qty:1}]
      state.cart = [...newItem]
      // add cart to localstorage
      toLocalStorage(state.cart)
    },

    decreaseItem: (state, action) => {

      // find the index of the item and decreament the qty
      const index = state.cart.findIndex(ele => ele._id === action.payload._id);
      const newItems = [...state.cart];

      if(newItems[index].qty === 1){
        const filteredState = state.cart.filter(i => i._id !== action.payload._id)
        state.cart = [...filteredState]
      }else{
        newItems[index].qty--;
        state.cart = [...newItems]
      }
      // add cart to localstorage
      toLocalStorage(state.cart)
    },

    increaseItem: (state, action) => {
      // find the index of the item and decreament the qty
      const index = state.cart.findIndex(ele => ele._id === action.payload._id);
      const newItems = [...state.cart];
      newItems[index].qty++;
      state.cart = [...newItems]
      
      // add state to local storage
      toLocalStorage(state.cart)
    },
    removeItem: (state,action) =>{
      // get all the items from cart store except this item passed.
      const filteredState = state.cart.filter(i => i._id !== action.payload._id)
      state.cart = [...filteredState]

      // add to localstorage
      toLocalStorage(state.cart)
    },
    emptyItem:(state)=>{
      // this reducer emppty the order list
      state.cart = []
      toLocalStorage([])
      console.log("did,", state.cart)
    }
  },
})


function toLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Action creators are generated for each case reducer function
export const { addItem, increaseItem, decreaseItem, removeItem, emptyItem } = cartSlice.actions

export default cartSlice.reducer

