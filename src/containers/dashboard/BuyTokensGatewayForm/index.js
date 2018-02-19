import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import BigNum from 'bignumber.js';
import s from './styles.css';

import { ethInvest } from '../../../utils/validators';

import { openKycAlertPopup } from '../../../redux/modules/app/kycAlertPopup';
import { openTxFeeHelp } from '../../../redux/modules/dashboard/txFeeHelp';
import { changeCurrencyValue } from '../../../redux/modules/dashboard/paymentGateway';

import RenderInput from '../../../components/forms/RenderInput';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';

class BuyTokensGatewayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: ''
    };
  }

  getCurrencyRateFromProps(props) {
    return props.currencies[props.selectedCurrency].rate_btc;
  }

  getCurrencyRate() {
    return this.getCurrencyRateFromProps(this.props);
  }

  getEthRateFromProps(props) {
    return props.currencies['ETH'].rate_btc;
  }

  getEthRate() {
    return this.getEthRateFromProps(this.props);
  }

  getCurrencyFeeFromProps(props) {
    return props.currencies[props.selectedCurrency].tx_fee;
  }

  getCurrencyFee() {
    return this.getCurrencyFeeFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currencyValue || !nextProps.currencies) {
      return;
    }

    if (Number.isNaN(Number.parseFloat(nextProps.currencyValue))) {
      return;
    }

    const currencyValue = new BigNum(Number.parseFloat(nextProps.currencyValue));
    const expectedTxFee = new BigNum(this.getCurrencyFee(nextProps));
    const rate = new BigNum(this.getCurrencyRateFromProps(nextProps));
    const ethRate = new BigNum(this.getEthRateFromProps(nextProps));
    const minInvest = new BigNum(0.1);

    if (currencyValue.toNumber() && currencyValue.greaterThanOrEqualTo(minInvest)) {
      const btc = currencyValue.mul(rate);
      const eth = btc.dividedBy(ethRate);
      const tokens = eth.dividedBy(nextProps.ethTokenPrice).toFixed(3);
      const currencyAmount = currencyValue.plus(expectedTxFee);
      this.props.change('tokens', tokens);
      this.setState({ buttonText: ` for ${currencyAmount.toString()} ${nextProps.selectedCurrency}` });
    } else {
      this.props.change('tokens', '');
      this.setState({ buttonText: '' });
    }
  }

  render() {
    const {
      spinner,
      invalid,
      kycStatus,
      openKycAlertPopup,
      expectedTxFee,
      minInvest,
      openTxFeeHelp,
      selectedCurrency
    } = this.props;

    const renderButton = () => {
      if (kycStatus === 'verified') {
        return (
          <Button
            onClick={() => openMnemonicPopup()}
            disabled={invalid}
            spinner={spinner}>Purchase tokens{this.state.buttonText}</Button>
        );
      }

      return (
        <Button
          disabled={invalid}
          onClick={() => openKycAlertPopup()}>Purchase tokens{this.state.buttonText}</Button>
      );
    };

    const renderIfAvailable = (num) => {
      if (num) return Number(num).toFixed(5);

      return 0;
    };

    return (
      <div className={s.form}>
        <form>
          <div className={s.field}>
            <Field
              component={RenderInput}
              tip={selectedCurrency}
              size="large"
              name="currencyValue"
              placeholder={`0 ${selectedCurrency}`}
              validate={ethInvest}/>
          </div>

          <div className={s.field}>
            <Field
              component={RenderInput}
              tip="B2B"
              size="large"
              name="tokens"
              placeholder="0 B2B"
              disabled/>
          </div>

          <div className={s.gas}>
            <span title={expectedTxFee}>Tx fee: {renderIfAvailable(expectedTxFee)} {selectedCurrency}</span>
            <span title={minInvest}>Min. contribution: {renderIfAvailable(minInvest)} {selectedCurrency}</span>
          </div>

          <div className={s.button}>
            {renderButton()}
          </div>
        </form>

        <div className={s.tip}>
          <p>
            Now you can purchase B2B tokens with {selectedCurrency}.<br/>
            Use this calculator to evaluate the transaction rates.
          </p>
          <p>
            Enter the amount of {selectedCurrency} you want to contribute and find out the
            amount of B2B tokens you will get.
            Please note that a little bit {selectedCurrency} adding on top to cover the tx fee.<br/>
            <a onClick={() => openTxFeeHelp()}>What is the tx fee?</a>
          </p>
        </div>
      </div>
    );
  }
}

const FormComponent = reduxForm({
  form: 'buyTokensGateway',
  initialValues: {
    currencyValue: ''
  }
})(BuyTokensGatewayForm);

const formSelector = formValueSelector('buyTokensGateway');

export default connect(
  (state) => ({
    spinner: state.dashboard.buyTokens.spinner,
    kycStatus: state.app.app.user.kycStatus,
    ethTokenPrice: state.dashboard.dashboard.jcrTokenPrice.ETH,
    currencyValue: formSelector(state, 'currencyValue'),
    ...state.dashboard.paymentGateway
  }),
  {
    openKycAlertPopup,
    openTxFeeHelp,
    changeCurrencyValue
  }
)(FormComponent);
