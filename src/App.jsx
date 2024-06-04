/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header';
import { Fav } from './Components/Fav/Fav';
import { Search } from './Components/Search/Search';
import { Cart } from './Components/Cart/Cart';
import { Profile } from './Components/Profile/Profile';
import { Catalog } from './Components/Catalog/Catalog';
import  CatalogForMen  from './Components/Catalog/CatalogForMen';
import { CatalogForWoman } from './Components/Catalog/CatalogForWoman';
import { FavoritesProvider } from './FavContext'; 
import  ProductDetails from "./Components/ProductCard/ProductDetails"
import { productsData } from './productsData';
import Test from './Components/test/test';


export const App = () => {
  // Функция для отправки запроса на сервер для отправки электронной почты
  const sendEmail = async () => {
    try {
      // Отправляем POST запрос на /send-email на сервере
      const response = await axios.post('/send-email', {
        to: 'recipient@example.com' // Замените на адрес получателя
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }

  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
       <FavoritesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/men" element={<CatalogForMen />} />
        <Route path="/catalog/woman" element={<CatalogForWoman />} />
        <Route path="/catalog/men/product/:productId" element={<ProductDetails productsData={productsData} />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </FavoritesProvider>
    </div>
  );
};

