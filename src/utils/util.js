export const setAddress = ({ street, district_name, state_name, country_name }) => {
  return `${street !== '' ? `${street}, ` : ''}${district_name !== '' ? `${district_name}, ` : ''}${
    state_name !== '' ? `${state_name}, ` : ''
  }${country_name}`;
};
