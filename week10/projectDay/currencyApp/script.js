document.addEventListener("DOMContentLoaded", function () {
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const amountInput = document.getElementById("amount");
  const resultSpan = document.getElementById("result");
  const convertBtn = document.getElementById("convertBtn");
  const switchBtn = document.getElementById("switchBtn");

  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "SEK",
    "NZD",
  ];

  function populateCurrencySelects() {
    for (const currency of currencies) {
      const option1 = new Option(currency, currency);
      const option2 = new Option(currency, currency);
      fromCurrencySelect.appendChild(option1);
      toCurrencySelect.appendChild(option2);
    }
  }

  populateCurrencySelects();

  const apiKey = "102cc752389f5e4391147bfa";

  function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;

    if (!fromCurrency || !toCurrency || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch conversion data");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !data.conversion_rate) {
          throw new Error("Conversion data not available");
        }

        const convertedAmount = (amount * data.conversion_rate).toFixed(2);
        resultSpan.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  convertBtn.addEventListener("click", convertCurrency);

  switchBtn.addEventListener("click", function () {
    const tempCurrency = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = tempCurrency;
    convertCurrency();
  });
});
