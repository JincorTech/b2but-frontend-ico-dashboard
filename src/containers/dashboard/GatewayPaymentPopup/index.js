import React from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { closePaymentPopup } from '../../../redux/modules/dashboard/paymentGateway';

import Popup from '../../../components/common/Popup';

const GatewayPaymentPopup = (props) => {
  const {
    open,
    closePaymentPopup,
    paymentData,
    selectedCurrency
  } = props;

  const getRows = () => [
    {
      caption: 'Order Total:',
      value: `${paymentData.amount} ${selectedCurrency}`
    },
    {
      caption: 'Send To Address:',
      value:
        <p>
          {paymentData.address}
          <img className={s.qr} src={paymentData.qrcode_url}></img>
        </p>
    },
    {
      caption: 'Waiting time for payment:',
      value: `${paymentData.timeout} sec`
    },
    {
      caption: 'Payment ID:',
      value: `${paymentData.txn_id}`
    }
  ];

  return (
    <Popup
      open={open}
      close={() => closePaymentPopup()}>
      <div>
        <div className={s.title}>Waiting for your funds</div>
        <div className={s.text}>
          {getRows().map((row) => (
            <p key={row.caption}>
              <span className={s.caption}>{row.caption}</span>
              <span className={s.value}>{row.value}</span>
            </p>
          ))}
          <p>
            <span className={s.caption}>
              <a href={paymentData.status_url}>Transaction status link</a>
              <span className={s.warning}>SAVE THIS LINK TO TRACK YOUR TRANSACTION!</span>
            </span>
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default connect(
  (state) => ({
    open: state.dashboard.paymentGateway.paymentPopupIsOpen,
    paymentData: state.dashboard.paymentGateway.paymentData,
    selectedCurrency: state.dashboard.paymentGateway.selectedCurrency
  }),
  {
    closePaymentPopup
  }
)(GatewayPaymentPopup);
