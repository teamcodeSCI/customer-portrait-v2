import React from 'react';
import style from './card.module.scss';

const Card = ({ background, title, data }) => {
  return (
    <div style={{ borderColor: background }} className={style['card']}>
      <div style={{ background: background }} className={style['title']}>
        {title}
      </div>
      <ul>{data.map((item) => item.data.map((e, idx) => <li key={idx}>- {e}</li>))}</ul>
    </div>
  );
};

export default Card;
