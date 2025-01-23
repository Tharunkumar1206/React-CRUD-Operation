import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Layout , Footer} from './Pages/Layout';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App(){
  return(
    <>
      <BrowserRouter>
        <Layout/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
        </Routes>
        
        <Footer/>
        
      </BrowserRouter>
     
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
