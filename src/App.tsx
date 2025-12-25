import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import BackToTop from './components/feature/BackToTop';
import ScrollToTop from './components/feature/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <AppRoutes />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
