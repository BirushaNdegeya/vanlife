import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/notFound';
import About from './pages/About';
import './css/index.css';


const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/about',
            element: <About />
         }
      ]
   },
   {
      path: '*',
      element: <NotFound />
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
   <RouterProvider router={router} />
);