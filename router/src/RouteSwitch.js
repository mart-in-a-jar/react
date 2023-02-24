import { BrowserRouter, Routes, Route } from "react-router-dom";
import paths from "./paths";
import Profile from "./Profile";
import Home from "./Home";
import Header from "./Header";
import Faq from "./Faq";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.profile} element={<Profile />} />
                <Route path={paths.faq} element={<Faq />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
