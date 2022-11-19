import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const items: MenuItem[] = [
  { label: '栏目一', key: '/page1', icon: <PieChartOutlined /> },
  { label: '栏目二', key: '/page2', icon: <DesktopOutlined /> },
  {
    label: '栏目三',
    key: '/page3',
    icon: <UserOutlined />,
    children: [
      { label: '栏目301', key: '/page3/page301' },
      { label: '栏目302', key: '/page3/page302' },
      { label: '栏目303', key: '/page3/page303' },
    ],
  },
  {
    label: '栏目四',
    key: '/page4',
    icon: <TeamOutlined />,
    children: [
      { label: '栏目401', key: '/page4/page401' },
      { label: '栏目402', key: '/page4/page402' },
    ],
  },
  { label: '栏目五', key: '/page5', icon: <FileOutlined /> },
];

export default function MainMenu() {
  const navigate = useNavigate();
  const curLocation = useLocation();
  const [openKeys, setOpenKeys] = useState(() => [`/${curLocation.pathname.split('/')[1] || ''}`]);

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
      defaultSelectedKeys={[curLocation.pathname]}
      mode='inline'
      items={items}
      onClick={menuClick}
      onOpenChange={menuOpenChange}
      openKeys={openKeys}
    />
  );
}
