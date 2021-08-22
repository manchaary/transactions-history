import { formatDistanceToNow } from 'date-fns';

export const formatUSD = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export const formatAsDecimal = (value: number) => {
  const options = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).resolvedOptions();
  return value.toLocaleString('en-US', { ...options, style: 'decimal' });
}

export const formatDateDistance = (date: number | Date) => {
  return formatDistanceToNow(date);
}