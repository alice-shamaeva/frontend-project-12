import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider, ErrorBoundary } from '@rollbar/react';
import SingInForm from './signInForm.js';
import Home from './home.js';
import NotFound from './notFoundPage.js';
import SingUpForm from './signUpForm.js';
import AppContext from '../services/AppContext';
import routes from '../services/routes';
import runApp from '../services/init.js';
import 'react-toastify/dist/ReactToastify.css';
import CommonModal from './commonModal';

const [rollbarConfig, filter] = await runApp();

const App = () => (
  <Provider config={rollbarConfig}>
    <ErrorBoundary>
      <AppContext.Provider value={filter}>
        <CommonModal />
        <BrowserRouter>
          <Routes>
            <Route path={routes.signUp} element={<SingUpForm />} />
            <Route path={routes.login} element={<SingInForm />} />
            <Route path={routes.home} element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </ErrorBoundary>
  </Provider>
);

export default App;
