import React from 'react';
import style from './home.module.scss';
import Card from '@/components/Card';
import { styleColor } from '@/utils/const';

const Home = () => {
  return (
    <div className={style['home']}>
      <div className={style['item']}>
        <Card title={'Nỗi lo lắng'} background={styleColor[0].background} />
        <Card title={'Tính cách'} background={styleColor[1].background} />
        <Card title={'Gia đình/tình trạng hôn nhân'} background={styleColor[2].background} />
      </div>
      <div className={style['item']}>
        <div
          style={{ background: styleColor[3].background, borderColor: styleColor[3].border }}
          className={style['title']}
        >
          Đoàn Minh Đức
        </div>
        <Card title={'Thông tin cá nhân'} background={styleColor[8].background} />
        <div className={style['avatar']}>
          <img src={process.env.PUBLIC_URL + '/assets/images/profile.jpg'} alt="" />
        </div>
        <Card title={'Mục tiêu và nỗi lo cuộc sống'} background={styleColor[7].background} />
      </div>
      <div className={style['item']}>
        <Card title={'Mong muốn'} background={styleColor[4].background} />
        <Card title={'Sở thích'} background={styleColor[5].background} />
        <Card title={'Tài chính'} background={styleColor[6].background} />
      </div>
    </div>
  );
};

export default Home;
