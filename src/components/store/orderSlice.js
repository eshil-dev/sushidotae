import { createSlice } from '@reduxjs/toolkit'

// init the initial State to local and check if the user already added to cart 
const ordering_process = JSON.parse(localStorage.getItem('ordering'))

let orderingInit = null;
const ordering_process_null = {
  phone_number: '',
  valid_number: false,
  auth_code: '',
  sms_sent: '',
  page: '',
  user_address: '',
  user_location: null,
  user_custom_add: '',
  user_fullName: ''
};
ordering_process ?  orderingInit= ordering_process : orderingInit = ordering_process_null

const initialState = {
  ordering_process: orderingInit
}


export const orderingSlice = createSlice({
  name: 'ordering',
  initialState,
  reducers: {
    sms_sent: (state, action) => {
      state.ordering_process.sms_sent = action.payload;
      // set local storage as well
      toLocalStorage(state.ordering_process)
    },
    auth_code: (state, action) => {
      state.ordering_process.auth_code = action.payload;
      // set local storage as well
      toLocalStorage(state.ordering_process)
    },
    user_address: (state, action) => {
      state.ordering_process.user_address = action.payload;
      // set local storage as well
      toLocalStorage(state.ordering_process)
    },
    user_location: (state, action) => {
      state.ordering_process.user_location = action.payload;
      // set local storage as well
      toLocalStorage(state.ordering_process)
    },
    phone_number: (state, action) => {
      state.ordering_process.phone_number = action.payload;
      // set local storage as well
      toLocalStorage(state.ordering_process)
    },
    valid_number: (state, action) => {
      state.ordering_process.valid_number = action.payload
      // add cart to localstorage
      toLocalStorage(state.ordering_process)
    },
    page: (state, action) => {
      state.ordering_process.page = action.payload;
      // set local storage as well
      toLocalStorage(state.ordering_process)
    },
    user_custom_add: (state, action) => {
      state.ordering_process.user_custom_add = action.payload;
      // set local storage as well
      console.log("added add: ", action.payload)
      toLocalStorage(state.ordering_process)
    },
    user_fullName: (state, action) => {
      state.ordering_process.user_fullName = action.payload;
      // set local storage as well
      console.log("added name: ", action.payload)
      toLocalStorage(state.ordering_process)
    },
  },
})


function toLocalStorage(order){
  localStorage.setItem('ordering', JSON.stringify(order));
}

// Action creators are generated for each case reducer function
export const { sms_sent, phone_number, page,valid_number,auth_code, user_address,user_location,user_custom_add,user_fullName } = orderingSlice.actions

export default orderingSlice.reducer

