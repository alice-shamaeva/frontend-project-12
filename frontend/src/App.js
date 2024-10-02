import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/commonComponents/header.js';
import LoginPage from './components/loginPage.js';
import SignupPage from './components/signUpForm.js';
import Chat from './components/chatPage/chatPage.js';
import NotFoundPage from './components/notFoundPage.js';
import { AuthProvider, useAuth } from './services/context/authContext.jsx';
import routes from './services/routes.js';

const LoggedInRoute = () => {
  const { userData } = useAuth();
  return (
    userData ? <Outlet /> : <Navigate to={routes.loginRoute()} />
  );
};

const LoggedOutRoute = () => {
  const { userData } = useAuth();
  return (
    !userData ? <Outlet /> : <Navigate to={routes.chatRoute()} />
  );
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <Header />
        <Routes>
          <Route path={routes.chatRoute()} element={<LoggedInRoute />}>
            <Route path={routes.chatRoute()} element={<Chat />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={routes.loginRoute()} element={<LoggedOutRoute />}>
            <Route path="" element={<LoginPage />} />
          </Route>
          <Route path={routes.signupRoute()} element={<LoggedOutRoute />}>
            <Route path="" element={<SignupPage />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
