import React from 'react';
import s from './styles.css';

const GatewayPaymentDetails = (props) => {
  const {
    paymentData,
    currency
  } = props;

  const getRows = () => [
    {
      caption: 'Order Total:',
      value: `${paymentData.totalAmount} ${currency}`
    },
    {
      caption: 'Send To Address:',
      value:
        <span>
          {paymentData.address}
          <img className={s.qr} src={paymentData.qrcodeUrl}></img>
        </span>
    },
    {
      caption: 'Waiting time for payment:',
      value: `${paymentData.timeout} sec`
    },
    {
      caption: 'Payment ID:',
      value: `${paymentData.txnId}`
    }
  ];

  return (
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
              <a href={paymentData.statusUrl}>Transaction status link</a>
              <span className={s.warning}>SAVE THIS LINK TO TRACK YOUR TRANSACTION!</span>
            </span>
          </p>
        </div>
      </div>
  );
};

export default GatewayPaymentDetails;
