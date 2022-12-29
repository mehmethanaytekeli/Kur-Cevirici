const CC = require('currency-converter-lt');

const kur = new CC({from:"USD",to :"TRY",amount:1});

kur.convert().then(response => {
    console.log("1 Dolar Bugünkü Fiyatı:"+response)
})