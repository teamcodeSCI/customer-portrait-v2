import React from 'react';
import style from './card.module.scss';

const Card = ({ background, title }) => {
  return (
    <div style={{ borderColor: background }} className={style['card']}>
      <div style={{ background: background }} className={style['title']}>
        {title}
      </div>
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
