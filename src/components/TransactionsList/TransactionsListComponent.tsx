import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './styles.scss';
import { useStore } from '../../stores';
import { TransactionsContext } from '../../stores/Transactions';
import { TransactionItem } from '../TransactionItem';

export interface TransactionsListProps {
  tokenId: string;
}

export const TransactionsListComponent = observer(({ tokenId }: TransactionsListProps) => {
  const {
    transactions,
    loadTransactions,
  } = useStore(TransactionsContext);

  useEffect(() => {
    const load = async () => {
      await loadTransactions(tokenId);
    }
    load();
    // const timer = setInterval(load, 30000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="transactions-list">
      <TransitionGroup>
        {transactions.map(transaction => (
          <CSSTransition
            key={transaction.id}
            timeout={500}
            classNames="transactions"
          >
            <TransactionItem transaction={transaction} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});
