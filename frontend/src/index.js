import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Success from './Success';
import Fail from './Fail';
import Loading from './Loading';
import Signup from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loading/>}></Route>
    <Route path="/success" element={<Success/>}></Route>
    <Route path="/fail" element={<Fail/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
);
