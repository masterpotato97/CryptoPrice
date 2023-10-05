const bitcoinPriceElement = document.getElementById('bitcoin-price');
const ethereumPriceElement = document.getElementById('ethereum-price');
const updateButton = document.getElementById('update-button');
const timestampElement = document.getElementById('timestamp');


const API_KEY = 'df4258bfe2a53a3bedd6194e438b35fe';
const API_URL = `http://api.coinlayer.com/live?access_key=${API_KEY}&symbols=BTC,ETH`;

async function fetchCryptoPrices() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const bitcoinPrice = data.rates.BTC;
        const ethereumPrice = data.rates.ETH;
      

        bitcoinPriceElement.textContent = `$${bitcoinPrice.toFixed(2)}`;
        ethereumPriceElement.textContent = `$${ethereumPrice.toFixed(2)}`;
        

        const now = new Date();
        timestampElement.textContent = `Last updated: ${now.toLocaleString()}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        bitcoinPriceElement.textContent = 'Error loading';
        ethereumPriceElement.textContent = 'Error loading';
        timestampElement.textContent = '';
    }
}

fetchCryptoPrices();

updateButton.addEventListener('click', fetchCryptoPrices);
