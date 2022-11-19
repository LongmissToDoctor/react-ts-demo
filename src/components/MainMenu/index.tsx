import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', 'page1', <PieChartOutlined />),
  getItem('Option 2', 'page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export default function MainMenu() {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(['']);

  const menuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  /** keys是一个数组，记录了哪一项是展开的 */
  const menuOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme='dark'
      defaultSelectedKeys={['1']}
      mode='inline'
      items={items}
      onClick={menuClick}
      onOpenChange={menuOpenChange}
      openKeys={openKeys}
    />
  );
}
