

/*

{
  "provider": "https://www.exchangerate-api.com",
  "WARNING_UPGRADE_TO_V6": "https://www.exchangerate-api.com/docs/free",
  "terms": "https://www.exchangerate-api.com/terms",
  "base": "USD",
  "date": "2024-12-28",
  "time_last_updated": 1735344002,
  "rates": {
    "USD": 1,
    "AED": 3.67,
    "AFN": 70.31,
    "ALL": 94.71,
    "AMD": 397.39,
    "ANG": 1.79,
    "AOA": 921.37,
    "ARS": 1030.5,
    "AUD": 1.61,
    "AWG": 1.79,
    "AZN": 1.7,
    "BAM": 1.88,
    "BBD": 2,
    "BDT": 119.5,
    "BGN": 1.88,
    "BHD": 0.376,
    "BIF": 2930.44,
    "BMD": 1,
    "BND": 1.36,
    "BOB": 6.93,
    "BRL": 6.19,
    "BSD": 1,
    "BTN": 85.48,
    "BWP": 13.93,
    "BYN": 3.39,
    "BZD": 2,
    "CAD": 1.44,
    "CDF": 2840.44,
    "CHF": 0.901,
    "CLP": 990.44,
    "CNY": 7.3,
    "COP": 4406.71,
    "CRC": 506.54,
    "CUP": 24,
    "CVE": 105.82,
    "CZK": 24.17,
    "DJF": 177.72,
    "DKK": 7.16,
    "DOP": 60.81,
    "DZD": 135.4,
    "EGP": 50.87,
    "ERN": 15,
    "ETB": 125.74,
    "EUR": 0.96,
    "FJD": 2.32,
    "FKP": 0.796,
    "FOK": 7.16,
    "GBP": 0.796,
    "GEL": 2.8,
    "GGP": 0.796,
    "GHS": 15.17,
    "GIP": 0.796,
    "GMD": 72.51,
    "GNF": 8624.54,
    "GTQ": 7.7,
    "GYD": 209.15,
    "HKD": 7.76,
    "HNL": 25.4,
    "HRK": 7.23,
    "HTG": 130.73,
    "HUF": 394.23,
    "IDR": 16221.67,
    "ILS": 3.69,
    "IMP": 0.796,
    "INR": 85.48,
    "IQD": 1310.72,
    "IRR": 42082.63,
    "ISK": 139.18,
    "JEP": 0.796,
    "JMD": 155.72,
    "JOD": 0.709,
    "JPY": 157.81,
    "KES": 129.15,
    "KGS": 86.86,
    "KHR": 4004.67,
    "KID": 1.61,
    "KMF": 472.15,
    "KRW": 1473.16,
    "KWD": 0.308,
    "KYD": 0.833,
    "KZT": 519.41,
    "LAK": 21943.43,
    "LBP": 89500,
    "LKR": 293.18,
    "LRD": 181.81,
    "LSL": 18.69,
    "LYD": 4.91,
    "MAD": 10.08,
    "MDL": 18.48,
    "MGA": 4709.01,
    "MKD": 59.13,
    "MMK": 2097,
    "MNT": 3428.73,
    "MOP": 8,
    "MRU": 40.03,
    "MUR": 46.84,
    "MVR": 15.45,
    "MWK": 1745.27,
    "MXN": 20.29,
    "MYR": 4.47,
    "MZN": 63.93,
    "NAD": 18.69,
    "NGN": 1538.44,
    "NIO": 36.79,
    "NOK": 11.36,
    "NPR": 136.77,
    "NZD": 1.78,
    "OMR": 0.384,
    "PAB": 1,
    "PEN": 3.75,
    "PGK": 4.05,
    "PHP": 58.05,
    "PKR": 278.24,
    "PLN": 4.1,
    "PYG": 7732.79,
    "QAR": 3.64,
    "RON": 4.77,
    "RSD": 112.25,
    "RUB": 103.32,
    "RWF": 1410.8,
    "SAR": 3.75,
    "SBD": 8.51,
    "SCR": 14.14,
    "SDG": 480.45,
    "SEK": 11.01,
    "SGD": 1.36,
    "SHP": 0.796,
    "SLE": 22.88,
    "SLL": 22879.65,
    "SOS": 571.52,
    "SRD": 35.16,
    "SSP": 3900.93,
    "STN": 23.51,
    "SYP": 12903.14,
    "SZL": 18.69,
    "THB": 34.09,
    "TJS": 10.9,
    "TMT": 3.5,
    "TND": 3.19,
    "TOP": 2.39,
    "TRY": 35.23,
    "TTD": 6.71,
    "TVD": 1.61,
    "TWD": 32.78,
    "TZS": 2397.12,
    "UAH": 41.95,
    "UGX": 3669.87,
    "UYU": 44.16,
    "UZS": 12885.21,
    "VES": 51.93,
    "VND": 25424.58,
    "VUV": 118.58,
    "WST": 2.81,
    "XAF": 629.53,
    "XCD": 2.7,
    "XDR": 0.766,
    "XOF": 629.53,
    "XPF": 114.53,
    "YER": 249.45,
    "ZAR": 18.69,
    "ZMW": 27.8,
    "ZWL": 25.78
  }
}

*/ 


const api = "https://api.exchangerate-api.com/v4/latest/USD"




document.addEventListener("DOMContentLoaded", () => {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amount = document.getElementById("amount");
  const result = document.getElementById("result");
  const convertButton = document.getElementById("convertButton");

  // Fetch currency rates and populate dropdowns
  fetch(api)
    .then(response => response.json())
    .then(data => {
      const rates = data.rates;
      for (let currency in rates) {
        const optionFrom = document.createElement("option");
        const optionTo = document.createElement("option");
        optionFrom.value = currency;
        optionTo.value = currency;
        optionFrom.textContent = currency;
        optionTo.textContent = currency;
        fromCurrency.appendChild(optionFrom);
        toCurrency.appendChild(optionTo);
      }
    })
    
    .catch(error => {
      console.error("Error fetching data:", error);
      result.textContent = "Error fetching currency rates.";
    });

  // Conversion logic
  convertButton.addEventListener("click", () => {
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    if (isNaN(amountValue) || amountValue <= 0) {
      result.textContent = "Please enter a valid amount.";
      return;
    }

    fetch(api)
      .then(response => response.json())
      .then(data => {
        const rates = data.rates;
        const convertedAmount = (amountValue / rates[fromValue]) * rates[toValue];
        result.textContent = `${amountValue} ${fromValue} = ${convertedAmount.toFixed(2)} ${toValue}`;
       
        
        
      })
      .catch(error => {
        console.error("Error converting currency:", error);
        result.textContent = "Error performing conversion.";
      });
  });
});






