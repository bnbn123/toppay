import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import classnames from 'classnames';
import styles from 'styles/Menu.module.css';

interface IProps {
  menuItems?: React.ReactNode[];
  drawerClassName?: string;
  wrapperClassName?: string;
}
export const DrawerMenu = ({ menuItems = [], drawerClassName, wrapperClassName }: IProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={classnames('menu-drawer-container', wrapperClassName)}>
      <Button
        icon={<MenuOutlined style={{ color: 'white' }} />}
        onClick={() => setVisible(true)}
        size="middle"
        style={{ display: 'contents' }}
      />
      <Drawer
        className={classnames('app-main-menu', drawerClassName)}
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {(menuItems || []).map((item) => {
          return <div onClick={() => setVisible(false)}>{item}</div>;
        })}
      </Drawer>
    </div>
  );
};
