import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const thumbnailNavElement = document.getElementById('thumbnail-nav');
console.log(thumbnailNavElement); // This should log the element or `null` if not found

if (thumbnailNavElement) {
    const root = ReactDOM.createRoot(thumbnailNavElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("The thumbnail navigation element was not found. Make sure there is a div with id='thumbnail-nav' in your HTML.");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
