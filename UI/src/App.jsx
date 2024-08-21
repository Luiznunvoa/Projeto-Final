import { Home } from "./pages/Home";
import { Movies } from "./pages/Moveis";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Layout>
    </Router>
  );
}