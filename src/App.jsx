import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
