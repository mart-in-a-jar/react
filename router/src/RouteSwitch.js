import { BrowserRouter, Routes, Route } from "react-router-dom";
import paths from "./paths";
import Profile from "./Profile";
import Home from "./Home";
import Faq from "./Faq";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.profile} element={<Profile />} />
                <Route path={paths.faq} element={<Faq />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
