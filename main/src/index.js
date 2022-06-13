import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Other from './pages/other';

const root = ReactDOM.createRoot(document.getElementById('main-root'));


registerMicroApps([
  {
    name: 'react-app', // app name registered
    entry: '//localhost:8101',
    container: '#sub-app',
    activeRule: '/react-app'
  },
  {
    name: 'vue-app',
    entry: '//localhost:8102',
    container: '#sub-app',
    activeRule: '/vue-app',
  },
], {
  beforeLoad: (app) => {
    console.log('before load', app.name);
    if (app.name === 'react-app') window['__reactRefreshInjected'] = false;
  },
  beforeMount: [(app) => {
    console.log('before beforeMount', app.name);
  }, (app) => {
    console.log('before beforeMount', app.name);
  }]
});

start();


root.render(
  <BrowserRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<App />}>
        <Route path="other" element={<Other/>}/>
      </Route>
    </Routes> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
