import {Link, Outlet} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './App.less';

const menuItems = [
  {key: '1', label: <Link to="/react-app">React 应用</Link>},
  {key: '2', label: <Link to="/vue-app">Vue 应用</Link>},
  {key: '3', label: <Link to="/other">其他页面</Link>},
]

function App() {
  return (
    <Layout className="container">
      <Layout.Sider>
        <span className='logo'>Logo122</span>
        <Menu items={menuItems}/>
      </Layout.Sider>
      <Layout>
        <Layout.Header>
        </Layout.Header>
        <Layout.Content>
          <div id="sub-app" className='sub-app'><Outlet/></div>
        </Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
