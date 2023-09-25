import React, { useEffect } from 'react';
import style from './home.module.scss';
import Card from '@/components/Card';
import { styleColor } from '@/utils/const';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomer } from '@/features/customer/customerApi';
import { customerSelector, loadedCustomerSelector } from '@/features/customer/customerSlice';
import { randomColor, setAddress } from '@/utils/util';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
//535842
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get('company_id');
  const partnerId = searchParams.get('partner_id');
  const customer = useSelector(customerSelector);

  const loaded = useSelector(loadedCustomerSelector);

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
    if (companyId && partnerId && Number(partnerId) !== 0 && Number(partnerId) !== 0) {
      dispatch(fetchCustomer({ companyId: Number(companyId), partnerId: Number(partnerId) }));
    } else {
      navigate('/page-not-found');
    }
  }, [dispatch, companyId, partnerId, navigate]);
  return (
    <div className={style['home']}>
      <div className={style['item']}>
        {loaded && (
          <Card
            data={customer.data.hoat_dong}
            title={'Hoạt động hàng ngày'}
            background={styleColor[randomColor()].background}
          />
        )}
        {loaded && (
          <Card data={customer.data.other} title={'Thông tin khác'} background={styleColor[randomColor()].background} />
        )}
        {loaded && (
          <Card
            data={customer.data.muc_tieu}
            title={'Mục tiêu và nỗi lo cuộc sống'}
            background={styleColor[randomColor()].background}
          />
        )}
      </div>
      <div className={style['item']}>
        {loaded && (
          <Card
            data={customer.data.noi_lo_lang}
            title={'Nỗi lo lắng'}
            background={styleColor[randomColor()].background}
          />
        )}
        {loaded && (
          <Card data={customer.data.tinh_cach} title={'Tính cách'} background={styleColor[randomColor()].background} />
        )}
        {loaded && (
          <Card
            data={customer.data.gia_dinh}
            title={'Gia đình/tình trạng hôn nhân'}
            background={styleColor[randomColor()].background}
          />
        )}
      </div>
      <div className={style['item']}>
        <div style={{ background: styleColor[0].background }} className={style['title']}>
          {(loaded && customer.data.thong_tin_chung[0].name) || '...'}
        </div>
        {loaded && (
          <div className={style['personalInfo']}>
            <span>Thông tin cá nhân</span>
            <ul>
              <li>- Họ và tên: {customer.data.thong_tin_chung[0].name || '...'}</li>
              <li>- Giới tính: {gender || '...'}</li>
              <li>- Ngày sinh: {customer.data.thong_tin_chung[0].birth_date || '...'}</li>
              <li>
                - Địa chỉ:
                {setAddress({
                  street: customer.data.thong_tin_chung[0].street,
                  district_name: customer.data.thong_tin_chung[0].district_name,
                  state_name: customer.data.thong_tin_chung[0].state_name,
                  country_name: customer.data.thong_tin_chung[0].country_name,
                })}
              </li>
              <li>- Điện thoại: {customer.data.thong_tin_chung[0].phone || '...'}</li>
              <li>- Email: {customer.data.thong_tin_chung[0].pass_port || '...'}</li>
              <li>
                - Facebook:
                {customer.data.thong_tin_chung[0].acc_facebook === 'Chưa có thông tin' ? (
                  'Chưa có thông tin'
                ) : (
                  <Link to={customer.data.thong_tin_chung[0].acc_facebook}>
                    {customer.data.thong_tin_chung[0].acc_facebook}
                  </Link>
                )}
              </li>
              <li>- Nghề nghiệp: {customer.data.thong_tin_chung[0].mobile || '...'}</li>
              <li>- Trạng thái {customer.data.thong_tin_chung[0].marital_status || '...'}</li>
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
      </div>
      <div className={style['item']}>
        {loaded && (
          <Card data={customer.data.mong_muon} title={'Mong muốn'} background={styleColor[randomColor()].background} />
        )}
        {loaded && (
          <Card data={customer.data.so_thich} title={'Sở thích'} background={styleColor[randomColor()].background} />
        )}
        {loaded && (
          <Card data={customer.data.tai_chinh} title={'Tài chính'} background={styleColor[randomColor()].background} />
        )}
      </div>
      <div className={style['item']}>
        {loaded && (
          <Card
            data={customer.data.hanh_vi}
            title={'Hành vi trên Internet'}
            background={styleColor[randomColor()].background}
          />
        )}
        {loaded && (
          <Card
            data={customer.data.thuong_hieu}
            title={'Thương hiệu yêu thích'}
            background={styleColor[randomColor()].background}
          />
        )}
        {loaded && (
          <Card
            data={customer.data.anh_huong}
            title={'Bị ảnh hưởng bởi'}
            background={styleColor[randomColor()].background}
          />
        )}
      </div>
      {customer === undefined && <Navigate to={'/page-not-found'} />}
    </div>
  );
};

export default Home;
