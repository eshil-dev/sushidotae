
import React from 'react';

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
import MakeYourSushi from './components/Make-your-sushi';
import ThankYou from './components/thank-you';
import MapTest from './components/testMap';

import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
// import ProtectedRoute from './ProtectedRoute';

// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// const Login = lazy(() => import("../features/auth/LoginForm"));
// const Register = lazy(() => import("../features/users/RegisterForm"));
// const Users = lazy(() => import("../features/users/UsersList"));

// const Starter = lazy(() => import("../features/dashboard/Starter.js"));
// const OrderList = lazy(() => import("../features/orders/OrderList"));
// const Categories = lazy(() => import("../features/categories/CategoriesList"));
// const AddCategoryForm = lazy(() => import("../features/categories/AddCategoryFrom"));
// const Menus = lazy(() => import("../features/menus/MenusList"));
// const AddMenuForm = lazy(() => import("../features/menus/AddMenuForm"));

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<><Header></Header> <Home></Home> <Footer></Footer></>}/>
        <Route path='/make-your-sushi' element={<><Header/><MakeYourSushi/> <Footer/> </>}/>
        <Route path="/menu" element={<><Header/><Menu/> <Footer/> </>}/>
        <Route path='/info' element={<><Header/><Info/> <Footer/> </>}></Route>
        <Route path='/contact' element={<><Header/><Contact/> <Footer/> </>}></Route>
        <Route path='/career' element={<><Header/><Career/> <Footer/> </>}></Route>
        <Route path='/consumers-rights' element={<><Header/><ConsumerRights/> <Footer/> </>}></Route>
        <Route path='/faq' element={<><Header/><FAQ/> <Footer/> </>}></Route>
        <Route path='/franchies' element={<><Header/><Franchies/> <Footer/> </>}></Route>
        <Route path='/refund' element={<><Header/><Refund/> <Footer/> </>}></Route>
        <Route path='/terms-and-conditions' element={<><Header/><TermsAndConditions/> <Footer/> </>}></Route>
        <Route path='/cookies' element={<><Header/><Cookies/> <Footer/> </>}></Route>
        <Route path='/order' element={<><Header/><Order/> <Footer/> </>}></Route>
        <Route path='/otp' element={<><Header/><OTP/> <Footer/> </>}></Route>
        <Route path='/locate-me' element={<><Header/><Location/> <Footer/> </>}></Route>
        <Route path='/order-summary' element={<><Header/><OrderSummary/> <Footer/> </>}></Route>
        <Route path='/thank-you' element={<> <Header/><ThankYou/><Footer/> </>}></Route>
        <Route path='*' element={< PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
