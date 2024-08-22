import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNav from "../components/PageNav";
import Product from "../pages/Product";
import Pricing from "../pages/pricing";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Tracking from "../pages/Tracking";
import Logo from "../components/Logo";

const appNavs = [
  { to: "/", child: <Logo></Logo> },
  { to: "/product", child: "Product" },
  { to: "/pricing", child: "Pricing" },
  { to: "/login", child: "Log In", className: "cta " },
];

function App() {
  return (
    <div>
      <h1>This stays no matter which window you go to</h1>
      <BrowserRouter>
        <PageNav navs={appNavs} />

        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="product" element={<Product></Product>} />
          <Route path="pricing" element={<Pricing></Pricing>} />
          <Route path="login" element={<Login></Login>} />
          <Route path="tracking" element={<Tracking></Tracking>}>
            <Route index element={<p>List of cities</p>} />
            <Route path="cities" element={<p>List of cities</p>} />
            <Route path="countries" element={<p>countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
