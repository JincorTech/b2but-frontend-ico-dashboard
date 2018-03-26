import React from 'react';
import { connect } from 'react-redux';

import { closeDetailsPopup } from '../../../redux/modules/transactions/transactions';
import GatewayPaymentDetails from '../../../components/dashboard/GatewayPaymentDetails';

import Popup from '../../../components/common/Popup';

const GatewayTransactionDetailsPopup = (props) => {
  const {
    closeDetailsPopup,
    transactions,
    detailsPopupIsOpened,
    selectedTransactionId
  } = props;

  const selectedTransaction = transactions.find((t) => t.id === selectedTransactionId);
  if (!selectedTransaction) {
    return null;
  }

  return (
    <Popup
      width={500}
      open={detailsPopupIsOpened}
      close={() => closeDetailsPopup()}>
      <GatewayPaymentDetails
        currency={selectedTransaction.currency}
        paymentData={selectedTransaction}/>
    </Popup>
  );
};

export default connect(
  (state) => ({
    ...state.transactions.transactions
  }),
  {
    closeDetailsPopup
  }
)(GatewayTransactionDetailsPopup);
