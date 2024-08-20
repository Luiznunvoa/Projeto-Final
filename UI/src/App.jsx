import { Home } from "./pages/Home";
import { Movies } from "./pages/Moveis";
import { Sessions } from "./pages/Sessions";
import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/Sessions" element={<Sessions />} />
            </Routes>
        </Layout>
    </Router>
  );
}