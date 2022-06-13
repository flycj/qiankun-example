import {Outlet, Link} from 'react-router-dom'
// import './index.css';
function Layout() {
  return (
    <div className="container">
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout