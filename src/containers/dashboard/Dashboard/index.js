import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { fetchDashboard, changeTab } from '../../../redux/modules/dashboard/dashboard';
import { fetchFee } from '../../../redux/modules/dashboard/txFee';
import { fetchCurrencies } from '../../../redux/modules/dashboard/paymentGateway';

import BuyTokensForm from '../BuyTokensForm';
import BalanceInfo from '../BalanceInfo';
import VerifyBuyTokensPopup from '../VerifyBuyTokensPopup';
import TxFeeHelp from '../TxFeeHelp';
import BuyTokensGatewayForm from '../BuyTokensGatewayForm';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchDashboard, fetchFee, fetchCurrencies } = this.props;

    fetchDashboard();
    fetchFee();
    fetchCurrencies();
  }

  renderTabContent(tab) {
    switch (tab) {
      case 'deposit':
        return (
          <BuyTokensForm/>
        );
      case 'gateway':
        return (
          <BuyTokensGatewayForm/>
        );
      default:
        return null;
    }
  }

  render() {
    const { tab, changeTab } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.main}>
          <div className={s.tabs}>
            <div
              className={tab === 'deposit' ? s.active : s.tab}
              onClick={() => changeTab('deposit')}>Buy tokens from deposit</div>
            <div
              className={tab === 'gateway' ? s.active : s.tab}
              onClick={() => changeTab('gateway')}>Buy tokens via Coinpayments</div>
          </div>

          <div className={s.buyTokensForm}>
            {this.renderTabContent(tab)}
          </div>
        </div>
        <div className={s.col}>
          <BalanceInfo/>
        </div>

        <VerifyBuyTokensPopup/>
        <TxFeeHelp/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tab: state.dashboard.dashboard.selectedTab
  }),
  {
    fetchDashboard,
    changeTab,
    fetchFee,
    fetchCurrencies
  }
)(Dashboard);
