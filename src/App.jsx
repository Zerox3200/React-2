import './App.scss';
import { RouterProvider, createHashRouter } from "react-router-dom";
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Layout from './Layout/Layout';
function App() {

  const routers = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <About /> },
        { path: "/Portfolio", element: <Portfolio /> },
        { path: "/Contact", element: <Contact /> }
      ]
    }
  ])

  return (
    <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
