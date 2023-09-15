import { styleColor } from './const';

export const setAddress = ({ street, district_name, state_name, country_name }) => {
  return `${street !== '' ? `${street}, ` : ''}${district_name !== '' ? `${district_name}, ` : ''}${
    state_name !== '' ? `${state_name}, ` : ''
  }${country_name}`;
};
export const randomColor = () => {
  return Math.floor(Math.random() * styleColor.length);
};
