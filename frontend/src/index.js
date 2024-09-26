import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './node_modules/bootstrap/dist/css/bootstrap.css';
import { I18nextProvider } from 'react-i18next';
import App from './components/App';
import store from './slices/index';
import i18nextInstance from './services/i18nInstance.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18nextInstance} defaultNS="translation">
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>

  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
