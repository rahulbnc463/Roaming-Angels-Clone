
import './App.css';
// import AdminRegister from "./Components/Admin/AdminRegister";
// import { ChakraProvider } from "@chakra-ui/react";
// import AdminLogin from "./Components/Admin/AdminLogin";
import {Register} from './pages/Authantication/signup'
import { Login } from './pages/Authantication/Login';
import FooterPage from "./pages/FooterPage";

import ProductsPage from "./pages/ProductsA/ProductsPage";

import { AccoutDetails } from './pages/AccountDetails/AccoutDetails'

function App() {
  return (
    <div>
      <ProductsPage />
      <FooterPage />
    </div>
  );
}

export default App;
