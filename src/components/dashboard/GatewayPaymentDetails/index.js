import React from 'react';
import { format } from 'date-fns';
import s from './styles.css';

const GatewayPaymentDetails = (props) => {
  const {
    paymentData,
    currency
  } = props;

  const {
    totalAmount,
    address,
    qrcodeUrl,
    timeout,
    timestamp,
    txnId,
    confirmsNeeded,
    receivedAmount,
    receivedConfirms,
    status
  } = paymentData;

  const getStatusCaption = (status) => {
    switch (status) {
      case '-1':
        return 'Cancelled / Timed out';
      case '0':
        return 'Waiting for your funds';
      case '1':
        return 'Confirmed. Sending...';
      case '100':
        return 'Completed';
      default:
        return null;
    }
  };

  const getRows = () => [
    {
      caption: 'Total Amount To Send:',
      value: `${totalAmount} ${currency} (total confirms needed: ${confirmsNeeded})`
    },
    {
      caption: 'Received So Far:',
      value: receivedAmount ? `${receivedAmount} ${currency} (confirms received: ${receivedConfirms})` : null
    },
    {
      caption: 'Balance Remaining:',
      value: receivedAmount ? `${totalAmount - receivedAmount} ${currency}` : null
    },
    {
      caption: 'Send To Address:',
      value:
        <span>
          {address}
          <img className={s.qr} src={qrcodeUrl}></img>
        </span>
    },
    {
      caption: 'Waiting time for payment:',
      value: timeout ? `${timeout} sec` : null
    },
    {
      caption: 'Expiration date:',
      value: timestamp && timeout ? format(new Date(timestamp + (timeout * 1000)), 'DD/MM/YYYY hh:mm:ss') : null
    },
    {
      caption: 'Payment ID:',
      value: `${txnId}`
    },

  ];

  return (
      <div>
        <div className={s.title}>{getStatusCaption(status)}</div>
        <div className={s.text}>
          {getRows().map((row) => (
            row.value
            ? <p key={row.caption}>
                <span className={s.caption}>{row.caption}</span>
                <span className={s.value}>{row.value}</span>
              </p>
            : null
          ))}
          <p>
            <span className={s.caption}>
              <a href={paymentData.statusUrl}>Transaction status link</a>
            </span>
          </p>
        </div>
      </div>
  );
};

export default GatewayPaymentDetails;
