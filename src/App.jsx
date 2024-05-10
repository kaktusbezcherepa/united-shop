import Header from "./Components/Header/Header"
import { Fav } from "./Components/Fav/Fav"
import { Search } from "./Components/Search/Search"
import { Cart } from "./Components/Cart/Cart"
import { Profile } from "./Components/Profile/Profile"
import { Routes, Route } from "react-router-dom"
export const App = () => {
  return (
    <div>
    <Header/>
        <Routes>
            <Route exact path="/" element={<Search/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/favorites" element={<Fav/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  )
}
