import { TransactionsProvider } from '../../stores/Transactions';
import { TransactionsListComponent, TransactionsListProps } from './TransactionsListComponent';

export const TransactionsList = (props: TransactionsListProps) => {
  return (
    <TransactionsProvider>
      <TransactionsListComponent {...props} />
    </TransactionsProvider>
  );
}