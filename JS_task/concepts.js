
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
      ListOfNames.shift()               // {unshift => add elements at first }     insert first of the array
      ListOfNames.push("manoj")         //{pop => remove the last element}  insert the element to the last index
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

}
basic_concepts()


  // classes and functions
class find_person_age {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    cal_age() {
        const current_date = new Date();
        return current_date.getFullYear() - this.year;
    }
}
var findpersonage = new find_person_age("vijay", 2001);

class greetings extends find_person_age {
    constructor(name, year) {
        super(name, year);
    }

    welcome() {
        return "Thank you " + this.name ; // Added space after this.name
    }
}
console.log("Hiii" , findpersonage.name , "your age is",findpersonage.cal_age())
var greet = new greetings("vijay", 2001);
console.log(greet.welcome());






function asynchronousMethod() {    
    let promise1 = new Promise((resolve , reject) =>{
        let result = 2 + 1
        if (result == 4){
            resolve("Correct")
        }
        else{
            reject("Not correct")
        }     
    })
    promise1.then((message)=>{
        console.log("Then message " + message)
    }).catch((message)=>{
        console.log("In the catch " +message)
    })
}

function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0)
         return reject("Delay must be greater than 0")
  
      setTimeout(() => {
        resolve(`You waited ${delay} milliseconds`)
      }, delay)
    })
  }
// setTimeoutPromise(250).then((msg1)=>{
//     console.log("first run")
//     console.log(msg1)
//     return setTimeoutPromise(500)
// }).then((msg2)=>{
//     console.log("Second run")
//     console.log(msg2)
// })

async function doWork() {
    try{
        console.log("first work")
        const firstwork = await setTimeoutPromise(250)
        console.log(firstwork)
        console.log("second work")
        const secondword = await setTimeoutPromise(500)
        console.log(secondword)
    }catch(err)
    {
        console.log(err)
    }
}


asynchronousMethod()  


const userAction = async () => {
  try {
    const pre_fun = await doWork();
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employee/3');
      const data = await response.json();
      console.log(data); // Logging the response data
       }catch(err){
       console.log(err)
       }
};

userAction();
