import ReactDOM from "react-dom/client"
import "./style.css"
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

let reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render
    (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );