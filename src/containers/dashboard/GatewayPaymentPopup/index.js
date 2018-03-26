import React from 'react';
import { connect } from 'react-redux';

import { closePaymentPopup } from '../../../redux/modules/dashboard/paymentGateway';
import GatewayPaymentDetails from '../../../components/dashboard/GatewayPaymentDetails';

import Popup from '../../../components/common/Popup';

const GatewayPaymentPopup = (props) => {
  const {
    open,
    closePaymentPopup,
    paymentData,
    selectedCurrency
  } = props;

  return (
    <Popup
      width={500}
      open={open}
      close={() => closePaymentPopup()}>
      <GatewayPaymentDetails currency={selectedCurrency} paymentData={paymentData}/>
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
