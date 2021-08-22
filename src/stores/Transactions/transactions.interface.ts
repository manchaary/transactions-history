import { formatUSD, formatDateDistance, formatAsDecimal } from '../../utils/format';

export type TransactionData = {
  id: string;
  AMM: string;
  network: string;
  amount0In: number;
  amount0Out: number;
  amount1In: number;
  amount1Out: number;
  amountETH: number;
  amountUSD: number;
  blockNumber: number;
  pairAddress: string;
  pairLiquidityETH: number;
  pairLiquidityUSD: number;
  sender: string;
  timestamp: number;
  to: string;
  token0Address: string;
  token0PriceETH: number;
  token0PriceUSD: number;
  token0Symbol: string;
  token1Address: string;
  token1PriceETH: number;
  token1PriceUSD: number;
  token1Symbol: string;
  transactionAddress: string;
  walletAddress: string;
  walletCategory: string;
}

export type Transaction = {
  id: string;
  time: string;
  amountUSD: string;
  buyAmount: string;
  buySymbol: string;
  sellAmount: string;
  sellSymbol: string;
  isSell: boolean;
}

export const convertToTransaction = (transactionData: TransactionData): Transaction => {
  const isSell = transactionData.amount0In > 0 ? true : false;
  return {
    id: transactionData.id,
    time: formatDateDistance(transactionData.timestamp * 1000),
    amountUSD: formatUSD(transactionData.amountUSD),
    buyAmount: formatAsDecimal(isSell ? transactionData.amount1Out : transactionData.amount0Out),
    buySymbol: isSell ? transactionData.token1Symbol : transactionData.token0Symbol,
    sellAmount: formatAsDecimal(isSell ? transactionData.amount0In : transactionData.amount1In),
    sellSymbol: isSell ? transactionData.token0Symbol : transactionData.token1Symbol,
    isSell,
  }
}