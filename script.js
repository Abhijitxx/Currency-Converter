function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    var exchangeRates = {
        usd: 1,
        eur: 0.94,
        gbp: 0.82,
        jpy: 151.78,
        aud: 1.57,
        cad: 1.38,
        chf: 0.90,
        cny: 7.29,
        inr: 83.28,
        brl: 4.93
    };

    var convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = convertedAmount.toFixed(2) + ' ' + toCurrency.toUpperCase();
}
