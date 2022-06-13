import {Outlet, Link} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react-app' : '/'}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
