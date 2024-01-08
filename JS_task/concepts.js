console.log("hello")

function basic_concepts () {
 
    //simple addition with two numbers
        let number1 = 10
        let number2 = 20
        let result = number1 + number2
        console.log(result)

  // number methods
        console.log(Number.isNaN(number1))
        console.log(Number.isInteger(number1))
        console.log(Number.parseFloat(3.926).toFixed(2))

  // changing datatypes
        console.log(number1.toString() + number2.toString())
        console.log(parseFloat("342.43") + parseFloat("342.43"))


  // string methods
        var name = "vijay"
        greeting = "Welcome"
        console.log(greeting.concat(" " ,name))
        console.log(name.indexOf('a'))
        console.log(name.substring(2, name.length))
        console.log(name.endsWith('a'))

}





basic_concepts()