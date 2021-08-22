import { createProvider } from '../utils/providerFactory';
import { TransactionsStore } from './Transactions.store';

export * from './transactions.interface';

export const {
  Context: TransactionsContext,
  Provider: TransactionsProvider,
} = createProvider(TransactionsStore);
