import './App.css';
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
  return <RouterProvider router={router} />;
}

export default App;
