import { Home } from "./pages/Home";
import { Movies } from "./pages/Moveis";
import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movies" element={<Movies />} />
            </Routes>
        </Layout>
    </Router>
  );
}