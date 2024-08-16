export const formatPrice = (amount: number, currency: string = 'USD') => {
  return Intl.NumberFormat(navigator.language, {
    currency,
    style: 'currency',
  }).format(amount);
};
