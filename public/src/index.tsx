import React from 'react';
import { Provider } from 'react-redux';
import { Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import store from './store/store';
import './index.css';
import App from './App';
import Commerce from "./pages/Commerce";
import Intro from "./pages/Intro";
import Login from "./pages/Login";

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
  {/* <React.StrictMode> */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <Routes>  
            <Route path="/commerce/*" element={<Commerce />} />
            <Route path="/home" element={<App />} />
            <Route path="/*" element={<Intro />} />
          </Routes> 
        </Provider>
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </>
);