import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { fetchTransactions, openDetailsPopup } from '../../../redux/modules/transactions/transactions';
import { openMakeDepositPopup } from '../../../redux/modules/app/makeDepositPopup';

import Transaction from '../../../components/transactions/Transaction';
import GatewayTransaction from '../../../components/transactions/GatewayTransaction';
import Button from '../../../components/common/Button';
import GatewayTransactionDetailsPopup from '../GatewayTransactionDetailsPopup';

class Transactions extends Component {
  componentWillMount() {
    this.props.fetchTransactions();
  }

  _getSortedTransactions() {
    const { transactions } = this.props;

    return []
      .concat(transactions)
      .slice()
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  render() {
    const { transactions, openMakeDepositPopup, openDetailsPopup } = this.props;

    const renderTransactions = () => (
      <div className={s.main}>
        <div className={s.title}>Latest transactions</div>
        {this._getSortedTransactions().map((t) => (
          t.type === 'gateway_transaction'
            ? <GatewayTransaction key={t.id} paymentData={t} openDetailsPopup={openDetailsPopup}/>
            : <Transaction key={`${t.id}${t.type}${t.from}${t.to}`} {...t}/>
        ))}
      </div>
    );

    const renderMock = () => (
      <div className={s.main}>
        <div className={s.title}>You don’t have any transactions yet.</div>
        <div className={s.subtitle}>To buy tokens, you need to deposit your account wallet.</div>
        <div className={s.button}>
          <Button size="small" onClick={() => openMakeDepositPopup()}>Make deposit</Button>
        </div>
      </div>
    );

    return (
      <div className={s.wrapper}>
        {transactions.length > 0 ? renderTransactions() : renderMock()}
        <GatewayTransactionDetailsPopup/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    transactions: state.transactions.transactions.transactions
  }),
  {
    fetchTransactions,
    openMakeDepositPopup,
    openDetailsPopup
  }
)(Transactions);
