import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import './css/index.css';


const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />
         }
      ]
   },
   {
      path: '*',
      element: <h1>404 Page</h1>
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
   <RouterProvider router={router} />
);