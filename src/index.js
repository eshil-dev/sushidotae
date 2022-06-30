import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Menu from './components/menu';
import Info from './components/pages/info_sushi';
import Contact from './components/pages/contact';
import Career from './components/pages/career';
import ConsumerRights from './components/pages/consumer_rights';
import Cookies from './components/pages/cookies';
import FAQ from './components/pages/faq';
import Franchies from './components/pages/franchies';
import Refund from './components/pages/refund_policy';
import TermsAndConditions from './components/pages/terms_conditions'
import Order from './components/order';
import OTP from './components/OTP';
import Location from './components/locate_me';
import OrderSummary from './components/order_summary';
import { store } from './components/store/store'
import { Provider } from 'react-redux'

import {BrowserRouter, Routes, Route } from "react-router-dom";
import MapTest from './components/testMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode has been commented due to marker on map while on localhost
  // <React.StrictMode>
    <Provider store={store}>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path='/test' element={<MapTest/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path='/info' element={<Info/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/career' element={<Career/>}></Route>
            <Route path='/consumers-rights' element={<ConsumerRights/>}></Route>
            <Route path='/faq' element={<FAQ/>}></Route>
            <Route path='/franchies' element={<Franchies/>}></Route>
            <Route path='/refund' element={<Refund/>}></Route>
            <Route path='/terms-and-conditions' element={<TermsAndConditions/>}></Route>
            <Route path='/cookies' element={<Cookies/>}></Route>
            <Route path='/order' element={<Order></Order>}></Route>
            <Route path='/otp' element={<OTP></OTP>}></Route>
            <Route path='/locate-me' element={<Location></Location>}></Route>
            <Route path='/order-summary' element={<OrderSummary></OrderSummary>}></Route>
            <Route path='*' element={< PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
