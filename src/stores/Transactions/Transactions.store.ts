import { runInAction, makeAutoObservable } from 'mobx';

import { post } from '../../api-client';
import { Transaction, convertToTransaction, TransactionData } from './transactions.interface';

export class TransactionsStore {
  payload = {
    'limit': 30,
    'order': 'desc',
    'sort_by': 'timestamp',
  };
  isLoading: boolean = true;
  transactions: Transaction[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadTransactions = (token_id: string) => {
    return post(`/${token_id}/swaps`, this.payload)
      .then(response => {
        const { data } = response.data;
        runInAction(() => {
          this.transactions = data.map((item: TransactionData) => convertToTransaction(item));
          this.isLoading = false;
        });
      });
  }
}