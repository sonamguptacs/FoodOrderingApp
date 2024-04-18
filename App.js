import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Main} from './components/main'
import { Cart } from "./components/Pages/Cart";
import About from "./components/Pages/About";
import SignIn from "./components/Pages/SignIn";
import Contact from "./components/Pages/Contact";


const App = () => {
    return <Layout />
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[{
            path: '/',
            element: <Main/>
        },{
            path: '/cart',
            element: <Cart/>
        },{
            path: '/about',
            element: <About/>
        },{
            path: '/sign-in',
            element: <SignIn/>
        },{
            path: '/contact',
            element: <Contact/>
        }]
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);
