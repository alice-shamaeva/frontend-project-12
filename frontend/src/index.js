import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';

import './index.css';
import init from './services/init.js';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await init();
  root.render(vdom);
};

app();
