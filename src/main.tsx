import React from 'react';
import ReactDOM from 'react-dom/client';
// 样式初始化一般放在最前
import 'reset-css';

// UI框架的样式
import 'antd/dist/antd.css';

// 全局样式
import '@/assets/styles/global.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
