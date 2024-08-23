import { Home } from "./pages/Home";
import { Movies } from "./pages/Moveis";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Sessions } from "./pages/Sessions";
import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApplicationContextProvider } from "./contexts/ApplicationContextProvider";

export function App() {
  return (
    <Router>
      <ApplicationContextProvider>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Sessions" element={<Sessions />} />
            </Routes>
        </Layout>
      </ApplicationContextProvider>
    </Router>
  );
}