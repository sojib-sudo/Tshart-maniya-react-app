
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layout/Main';

function App() {

  //for react router setup 1
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main> </Main>,
      children: [
      {
        path: '/',
        loader: () => fetch('tshirts.json'),
        element: <Home></Home>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }

      ]
    }
  ])


  return (
    <div className="App">

      {/* /for react router setup 2 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
