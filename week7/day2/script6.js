const bankAmount = 5000; 
const vatPercentage = 0.17;

const expenses = ["+200", "-100", "+146", "+167", "-2900"]; 


const expensesWithTaxes = expenses.map((expense) => {
  const amount = parseFloat(expense);
  if (!isNaN(amount)) {
    return (
      (amount >= 0 ? "+" : "-") + (amount * (1 + vatPercentage)).toFixed(2)
    );
  } else {
    return expense;
  }
});


const netChange = expensesWithTaxes.reduce(
  (total, expense) => total + parseFloat(expense),
  0
);


const finalBankAmount = bankAmount + netChange;

console.log(`Initial bank amount: ${bankAmount}`);
console.log(`Expenses with taxes: ${expensesWithTaxes.join(", ")}`);
console.log(`Net change: ${netChange.toFixed(2)}`);
console.log(
  `Bank account at the end of the month: ${finalBankAmount.toFixed(2)}`
);
