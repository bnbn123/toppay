import { Drawer, Button } from 'antd';
import { ArrowRightOutlined, MenuOutlined } from '@ant-design/icons';
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
    <div className={classnames('menu-drawer-container ', wrapperClassName)}>
      <Button
        icon={<MenuOutlined style={{ color: 'white' }} />}
        onClick={() => setVisible(true)}
        size="middle"
        style={{ display: 'contents' }}
      />
      <Drawer
        className={classnames('app-main-menu', drawerClassName)}
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        width={'100%'}
        contentWrapperStyle={{}}
        bodyStyle={{
          background: `linear-gradient(238.14deg, #96C35F -26.9%, #017F38 15.41%, #065227 78.59%), #C4C4C4`,
        }}
      >
        <div className="menu-container text-center mt-20">
          {menuItems?.map((item) => {
            return <div onClick={() => setVisible(false)}>{item}</div>;
          })}
        </div>
      </Drawer>
    </div>
  );
};
