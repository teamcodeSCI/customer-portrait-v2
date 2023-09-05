import React, { useEffect } from 'react';
import style from './home.module.scss';
import Card from '@/components/Card';
import { styleColor } from '@/utils/const';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomer } from '@/features/customer/customerApi';
import { customerSelector, loadedCustomerSelector, loadingCustomerSelector } from '@/features/customer/customerSlice';
import { setAddress } from '@/utils/util';

const Home = () => {
  const dispatch = useDispatch();
  const customer = useSelector(customerSelector);
  console.log('customer: ', customer);
  const loaded = useSelector(loadedCustomerSelector);
  const loading = useSelector(loadingCustomerSelector);
  let gender = '';
  if (loaded) {
    if (customer.data.thong_tin_chung[0].gender === 'female') {
      gender = 'Nữ';
    } else if (customer.data.thong_tin_chung[0].gender === 'male') {
      gender = 'Nam';
    } else {
      gender = '';
    }
  }
  useEffect(() => {
    dispatch(fetchCustomer({ companyId: 2, partnerId: 535842 }));
  }, [dispatch]);
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
          {(loaded && customer.data.thong_tin_chung[0].name) || '...'}
        </div>
        {loaded && (
          <div className={style['personalInfo']}>
            <span>Thông tin cá nhân</span>
            <ul>
              <li>- Giới tính: {gender || '...'}</li>
              <li>- Hộ chiếu: {customer.data.thong_tin_chung[0].pass_port || '...'}</li>
              <li>- Ngày sinh: {customer.data.thong_tin_chung[0].bird_date || '...'}</li>
              <li>- Số điện thoại 1: {customer.data.thong_tin_chung[0].phone || '...'}</li>
              <li>- Số điện thoại 2: {customer.data.thong_tin_chung[0].mobile || '...'}</li>
              <li>
                - Địa chỉ:{' '}
                {setAddress({
                  street: customer.data.thong_tin_chung[0].street,
                  district_name: customer.data.thong_tin_chung[0].district_name,
                  state_name: customer.data.thong_tin_chung[0].state_name,
                  country_name: customer.data.thong_tin_chung[0].country_name,
                })}
              </li>
            </ul>
          </div>
        )}

        <div className={style['avatar']}>
          {loaded && (
            <img
              src={customer.data.thong_tin_chung[0].img || process.env.PUBLIC_URL + '/assets/images/no-image.jpg'}
              alt=""
            />
          )}
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
