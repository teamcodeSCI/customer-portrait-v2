import React from 'react';
import style from './card.module.scss';
import { styleColor } from '@/utils/const';

const Card = ({ background, title }) => {
  const borderColor = styleColor.find((item) => item.background === background).border;
  return (
    <div style={{ background: background, borderColor: borderColor }} className={style['card']}>
      <div className={style['title']}>{title}</div>
      <ul>
        <li>
          - Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in
          ấn
        </li>
        <li>
          - Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in
          ấn
        </li>
        <li>
          - Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in
          ấn
        </li>
        <li>
          - Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in
          ấn
        </li>
      </ul>
    </div>
  );
};

export default Card;
