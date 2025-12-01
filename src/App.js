import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import DiscoverUs from "./pages/DiscoverUs";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import useScrollTop from "./hooks/useScrollTop";

function AppContent() {
  useScrollTop();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover-us" element={<DiscoverUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
