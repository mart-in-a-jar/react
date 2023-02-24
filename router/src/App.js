import { BrowserRouter, Routes, Route } from "react-router-dom";
import paths from "./paths";
import Profile from "./Profile";
import Home from "./Home";
import Header from "./Header";
import "./App.css";
import Faq from "./Faq";
import { Shop, ShopItem } from "./Shop";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.profile} element={<Profile />} />
                <Route path={paths.faq} element={<Faq />} />
                <Route path={paths.shop} element={<Shop />} />
                <Route path={paths.shop + "/:id"} element={<ShopItem />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
