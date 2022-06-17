import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

// BrowsRouter - гланый компонент, который должен обернуть все наше приложение
// так мы говорим Реакту, что мы используем тут URL маршруты 
// ReactRouter помогает работать со страницами. При заходе на URL ссылку он обрабатывает и рендерит только нужные компоненты. 
// Благодаря этому у нас не происходить презагрузки целой страницы, а только та часть, которую мы определим.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


