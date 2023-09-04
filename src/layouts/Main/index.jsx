import React from 'react';
import style from './main.module.scss';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className={style['main']}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
