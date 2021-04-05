let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

/*********Conversión de yuanes a dolares */
const fromUSDToJPY = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInJPY = (valueInDollar/oneEuroIs.USD) * oneEuroIs.JPY;
    //return the doller value
    return valueInJPY;
}

/*********Conversión de euros a dolares */
const fromEuroToUSD = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInUSD = valueInEuro * oneEuroIs.USD;
    //return the doller value
    return valueInUSD;
}

/*********Conversión de Yen a Pound */
const fromJPYToGBP = function(valueInJPY){
    // convert the given valueInEuro to dollars
    let valueInGBP = (valueInJPY/oneEuroIs.JPY) * oneEuroIs.GBP;
    //return the doller value
    return valueInGBP;
}


module.exports = { oneEuroIs, fromUSDToJPY,  fromEuroToUSD, fromJPYToGBP }