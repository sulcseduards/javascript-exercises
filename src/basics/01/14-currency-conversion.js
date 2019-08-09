/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY principle)
 */

// You are allowed to change this function
function convertToUSD(price) {
    let currnetUSDSum = price * 1.24718
    let USDFinalPercent = currnetUSDSum /100
    let USDFinal = currnetUSDSum + USDFinalPercent
    var USDPrice = "$" + USDFinal.toFixed(2);
    return USDPrice;
}
// You are allowed to change this function
function convertToBRL(price) {
    let currnetBRLSum = price * 4.70854
    let BRLFinalPercent = currnetBRLSum /100
    let BRLFinal = currnetBRLSum + BRLFinalPercent
    var BRLPrice = "R$" + BRLFinal.toFixed(2);
    return BRLPrice;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
