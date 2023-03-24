import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import Layout from './conponents/Layout';

function App() {
  return (
    <Routes>
      <Route
        path="/aaa"
        element={<Layout />}
      >
        <Route
          path=""
          element={<HomePage />}
        />
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="contact"
          element={<ContactPage />}
        />
        <Route
          path="product/:productId"
          element={<ProductPage />}
        />
      </Route>
      <Route
        path="*"
        element={<h1>404! This page is not found!!!</h1>}
      />
    </Routes>
  );
}

export default App;
