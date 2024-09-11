import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomLogin from "../components/login/login"
import CustomRegistration from "../components/registration/registration"
import CustomAbout from "../components/about/about"
import CustomHome from "../components/home/home"




const CustomNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CustomHome />} />
                <Route path="/about" element={<CustomAbout />} />
                <Route path="/login" element={<CustomLogin />} />
                <Route path="/registration" element={<CustomRegistration />} />
            </Routes>
        </BrowserRouter>
    )
}
export default CustomNavigation