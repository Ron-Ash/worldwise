import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import Pricing from "../pages/pricing";
import Home from "../pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product></Product>} />
        <Route path="pricing" element={<Pricing></Pricing>} />
        <Route path="home" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
