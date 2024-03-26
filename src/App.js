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
  return (
    <div className="App" style={{ flex: 1, height: '100vh' }}>
      {' '}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
