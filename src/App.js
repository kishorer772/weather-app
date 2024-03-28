import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import WeatherDetails from './pages/details/WeatherDetails';
import Weather from './pages/landing/Weather';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Weather />,
    },
    {
      path: '/details',
      element: <WeatherDetails />,
    },
  ]);
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
