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

    // Arrays and array methods

      ListOfNames = ["vijay" , "ajay" , "mani" , "mohan" ,"vijay", "kishor"]
      ListOfNames.shift() // {unshift => add elements at first }     insert first of the array
      ListOfNames.push("manoj") //{pop => remove the last element}  insert the element to the last index
      console.log(ListOfNames)            
      console.log(ListOfNames.at(3))          // access specific index
      document.getElementById("demo").innerHTML = ListOfNames.join(" $");
      console.log(ListOfNames.lastIndexOf("vijay") + 1)
      console.log(ListOfNames.includes("manoj"))
      //   ListOfNames.forEach(element => {
      //     console.log(element)                // itterate each values of array using foreach
      //   });

    //   Looping conditions

     listofnums = []
     for (i = 1; i <= 5; i++) {    // for loop 
        listofnums[i-1] = i*2;  
     }
     console.log(listofnums)
     details = {  name : "vijay",  age : 18,  year :2001 }
     for (values in details){         // for in for iterate through objects
        console.log(details[values])
     }
         var i = 0
         while(i < listofnums.length){        // while loop
          console.log(listofnums[i++]) 
        }

        condition = 10 

        do {
            console.log("print")          // do while
        }while(condition > 30)


    // Mapping
    let student_marks = new Map([
        ["stu1" , 70],
        ["stu2" , 65],
        ["stu3" , 88],
        ["stu4" , 43]
    ])
    console.log(student_marks)
    // student_marks.forEach((value , key) => { //traverse map using foreach()
    //     console.log(key + " " +  value)
    // });
    console.log(student_marks.size)
    student_marks.delete("stu2")
    console.log(student_marks)

    //


}






basic_concepts()