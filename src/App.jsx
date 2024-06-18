/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Fav } from './Components/Fav/Fav';
import { Search } from './Components/Search/Search';
import { Cart } from './Components/Cart/Cart';
import { Profile } from './Components/Profile/Profile';
import { Catalog } from './Components/Catalog/Catalog';
import CatalogForMen from './Components/Catalog/CatalogForMen';
import { FavoritesProvider } from './FavContext';
import ProductDetails from "./Components/ProductCard/ProductDetails"
import { WomenSummerData } from './Data/SummerCollection';
import { MainCatalog } from './Data/MainCatalog';
import { LimitedData } from './Data/LimitedData';
import { CartProvider } from './CartContext';
import { OrderProvider } from './OrderContext';
import Test from './Components/test/test';
import Clubcard from './Components/clubcard/clubcard';
import Orders from './Components/orders/orders';
import Summercollection from './summercollection/summercollection';

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
        <CartProvider>
          <OrderProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Fav />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/men" element={<CatalogForMen />} />
              <Route path="/limited-catalog/product/:productId" element={<ProductDetails data={LimitedData} />} />
              <Route path="/main-catalog/product/:productId" element={<ProductDetails data={MainCatalog} />} />
              <Route path="/summer-collection/product/:productId" element={<ProductDetails data={WomenSummerData} />}/>
              <Route path="/test" element={<Test />} />
              <Route path="/clubcard" element={<Clubcard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/summercollection" element={<Summercollection />} />
            </Routes>
            <Footer />
          </OrderProvider>
        </CartProvider>
      </FavoritesProvider>
    </div>
  );
};