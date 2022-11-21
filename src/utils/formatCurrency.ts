export function formatCurrency(value: string) {
  const valueNumber = parseInt(value);
  return new Intl.NumberFormat().format(valueNumber);
}