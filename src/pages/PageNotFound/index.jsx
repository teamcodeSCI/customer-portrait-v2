import React from 'react';
import style from './pageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={style['pageNotFound']}>
      <img src={process.env.PUBLIC_URL + '/assets/images/page-not-found.png'} alt="" />
    </div>
  );
};

export default PageNotFound;
