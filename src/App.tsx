import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './shared/layouts/MainLayout';
import HomePage from './domains/home/HomePage';
import CatalogPage from './domains/catalog/CatalogPage';
import CustomizationPage from './domains/customization/CustomizationPage';
import TrackingPage from './domains/tracking/TrackingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="customization" element={<CustomizationPage />} />
          <Route path="tracking" element={<TrackingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
