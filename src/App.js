import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './App.css';

//eventually this should be broken out into a module
const TransactionList = ({ transactions }) => (
  <table className="tran-list">
    <thead>
      <tr>
        <td className="tran-header" width="120px">Date</td>
        <td className="tran-header">Description</td>
        <td className="tran-header">Category</td>
        <td className="tran-amt-header">Amount</td>
      </tr>
    </thead>
    <tbody>
      {transactions.map(tr =>
        <Transaction key={tr.id} transaction={tr} />
      )}
    </tbody>
  </table>
);
TransactionList.propTypes = {
  transactions: PropTypes.array
}

const Transaction = ({ transaction }) => (
  <tr className="tran-item">
    <TransDate transDate={transaction.tran_date} />
    <TransDetail detail={transaction.name} />
    <TransCategory category={transaction.category} />
    <TransAmt amount={transaction.amount} />
  </tr>
);
Transaction.propTypes = {
  transaction: PropTypes.object.isRequired
}

const TransDetail = ({detail}) => (
  <td className='tran-name'>{detail}</td>
)
TransDetail.propTypes = {
  detail: PropTypes.string.isRequired
}
const TransCategory = ({category}) => (
  <td className='tran-category'>{category}</td>
)
TransDetail.propTypes = {
  category: PropTypes.string.isRequired
}

function TransAmt({ amount }) {
  const dispAmt = "$" + amount.toFixed(2).toLocaleString();
  return (
    <td className="tran-amt">{dispAmt}</td>
  );
}

function TransDate({ transDate }) {
  const dispDate =  moment(transDate).format("MMM Do");

  return (
    <td className='tran-cell' width='100px'>{dispDate}</td>
  );
}
TransDate.propTypes = {
  //transDate: PropTypes.instanceOf(Date)
  transDate: PropTypes.string.isRequired  //should be date :/
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          An attempt to replicate mint.com transaction list with React components.<br/>
          See: <code>src/App.js</code><br/>
          Its a work in progress as I learn myself ReactJS
        </p>
        <br />
        <TransactionList transactions={testTransactions} />
      </div>
    );
  }
}

export default App;

var testTransactions = [
  {
    id: 1,
    name: 'Trader Joes',
    category: 'Groceries',
    tran_date: '2017-08-20 21:23:30',
    amount: 134.40,
    detail: {
      statement: 'AplPay TRADER JOES LOS ANGELES0042180 626-599-3700 320172320305954410',
      comments: ''
    }
  },
  {
    id: 2,
    name: 'CVS Pharmacy',
    category: 'Housewares',
    tran_date: '2017-08-21 21:23:30',
    amount: 89.10,
    detail: {
      statement: 'AplPay CVS 65439-3700 3432642305994320',
      comments: ''
    }
  }, 
  {
    id: 3,
    name: 'Lucid Software',
    category: 'Online Services',
    tran_date: '2017-08-18 21:23:30',
    amount: 7.99,
    detail: {
      statement: 'LUCID SOFTWARE INC. SOUTH JORDAOPSNT_BCSTJ 8444658243 320172260217670819',
      comments: ''
    }
  }, 
  {
    id: 4,
    name: 'LADWP',
    category: 'Utilities',
    tran_date: '2017-08-11 21:23:30',
    amount: 534.40,
    detail: {
      statement: 'LADWP AutoPay Ref 234215235214234',
      comments: ''
    }
  },
];