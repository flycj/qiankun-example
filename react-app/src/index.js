import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


if (window.__POWERED_BY_QIANKUN__) {
  window.__reactRefreshInjected = false;
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let root = null;

function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.render(<App />);
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props) {
  console.log('[react18] props from main framework', props);
  render(props);
}
export async function unmount(props) {
  console.log('[react18] unmount', props);
  root.unmount();
}
export async function update(props) {
  console.log('[react18] update', props);
}


if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
