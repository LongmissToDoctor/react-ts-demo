import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from '../../components/MainMenu';

const { Header, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '1000px', height: '100vh' }}>
      {/* 侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className='logo' />
        <MainMenu />
      </Sider>

      {/* 右边内容 */}
      <Layout className='site-layout' style={{ display: 'flex', flexDirection: 'column' }}>
        {/* 右侧头部面包屑 */}
        <Header
          className='site-layout-background'
          style={{ padding: '0 16px', background: '#eee' }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <div
          className='site-layout-background'
          style={{ margin: '10px 16px 0 16px', minHeight: 360, background: '#eee', flex: 1 }}
        >
          <Outlet></Outlet>
        </div>
        {/* 右侧底部内容 */}
        <Footer style={{ textAlign: 'center', padding: '0', height: '48px', lineHeight: '48px' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
