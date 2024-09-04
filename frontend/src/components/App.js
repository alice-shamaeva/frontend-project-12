import { BrowserRouter, Routes, Route } from 'react-router-dom';
import notFoundPage from './notFoundPage.js';
import signUpForm from './formPage.js';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path"/" element={<notFoundPage />} />
        <Route path"/login" element={<signUpForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
