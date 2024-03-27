import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Details from './pages/details/Details';
import Weather from './pages/landing/Weather';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Weather />,
    },
    {
      path: '/details',
      element: <Details />,
    },
  ]);
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
