import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import WeatherDetails from './pages/details/WeatherDetails';
import Weather from './pages/landing/Weather';
import { ErrorBoundary } from 'react-error-boundary';
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
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
