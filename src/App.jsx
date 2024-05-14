import Header from "./Components/Header/Header";
import { Fav } from "./Components/Fav/Fav";
import { Search } from "./Components/Search/Search";
import { Cart } from "./Components/Cart/Cart";
import { Profile } from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "./Components/Catalog/Catalog";
import { CatalogForMen } from "./Components/Catalog/CatalogForMen";
import { CatalogForWoman } from "./Components/Catalog/CatalogForWoman";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/men" element={<CatalogForMen />} />
        <Route path="/catalog/woman" element={<CatalogForWoman />} />
      </Routes>
    </div>
  );
};