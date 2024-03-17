import React from "react";
import ReactDOM from "react-dom";

    import { Layout } from "./components/Layout";

const App = () => {
    return <Layout />
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
