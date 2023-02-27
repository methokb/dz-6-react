import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Component/Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Header/>
    <Main/>
    <Footer/>
    </>
);

