import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import Pricing from "../pages/pricing";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <div>
      <h1>This stays no matter which window you go to</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="product" element={<Product></Product>} />
          <Route path="pricing" element={<Pricing></Pricing>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
