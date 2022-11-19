import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// 样式初始化一般放在最前
import 'reset-css';

// UI框架的样式
import 'antd/dist/antd.css';

// 全局样式
import '@/assets/styles/global.scss';

import App from './App';

// 状态管理
import { Provider } from 'react-redux';
import store from '@/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
