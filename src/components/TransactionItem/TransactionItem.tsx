import { Transaction } from '../../stores/Transactions';

import './styles.scss';

export interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <div className={`transaction-item ${transaction.isSell ? 'transaction-item-sell' : 'transaction-item-buy'}`}>
      <div className="transaction-item-tokens">
        <div>{transaction.sellAmount}</div>
        <div>{transaction.buyAmount}</div>
      </div>
      <div className="transaction-item-symbols">
        <div>{transaction.sellSymbol}</div>
        <div>{transaction.buySymbol}</div>
      </div>
      <div className="transaction-item-price">{transaction.amountUSD}</div>
      <div className="transaction-item-time">{transaction.time}</div>
    </div>
  );
}