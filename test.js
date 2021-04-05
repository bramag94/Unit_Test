
test("One euro should be 127.9 yuanes", function(){
    // importo la funcion desde app.js
    const { fromUSDToJPY } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yuanes = fromUSDToJPY(3.5)

    // un dolar es 1.2 euros, entonces 3.5 dolares deberian ser (3.5/1.2=2.91 euros) con 2.91 * 127.9 yuanes)
    const expected = (3.5/1.2) * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yuanes);
})


test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToUSD } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dolares = fromEuroToUSD(3.5)

    // un euro es 1.2
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dolares);
})


test("One euro should be 0.8 LIBRAS", function(){
    // importo la funcion desde app.js
    const { fromJPYToGBP } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const libras = fromJPYToGBP(3.5)

    // un dolar es 1.2 euros, entonces 3.5 dolares deberian ser (3.5/1.2=2.91 euros) con 2.91 * 127.9 yuanes)
    const expected = (3.5/127.9) * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(libras);
})

