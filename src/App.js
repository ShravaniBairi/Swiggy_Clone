

import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from  './Components/Footer';
import Help from "./Components/Help";
import RestuarantMenu from './Components/RestuarantMenu';
import {createBrowserRouter, Outlet} from "react-router-dom";


function App() {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const AppLayout = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children : [
        {
          path:"/",
          element: <Body/>,
        },
        {
          path: "/Help",
          element: <Help/>
        },
        {
          path : "/RestuarantMenu/:resId",
          element : <RestuarantMenu/>
        }
      ]
    },
    
  ]
)




export default AppLayout;
