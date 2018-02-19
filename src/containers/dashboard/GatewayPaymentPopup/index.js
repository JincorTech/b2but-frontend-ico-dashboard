import React from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { closePaymentPopup } from '../../../redux/modules/dashboard/paymentGateway';

import Popup from '../../../components/common/Popup';

const GatewayPaymentPopup = (props) => {
  const {
    open,
    closePaymentPopup,
    paymentData
  } = props;

  return (
    <Popup
      open={open}
      close={() => closePaymentPopup()}>
      <div>
        <div className={s.title}>Payment details</div>
        <div className={s.text}>
          {Object.keys(paymentData).map((item) => <p key={item}>{item}: {paymentData[item]}</p>)}
        </div>
      </div>
    </Popup>
  );
};

export default connect(
  (state) => ({
    open: state.dashboard.paymentGateway.paymentPopupIsOpen,
    paymentData: state.dashboard.paymentGateway.paymentData
  }),
  {
    closePaymentPopup
  }
)(GatewayPaymentPopup);
