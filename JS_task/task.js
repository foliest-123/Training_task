
display_number = () =>{
        var val1 = parseInt(document.getElementById('num1').value)
        var val2 = parseInt(document.getElementById('num2').value)
        var result = val1 / val2
        if (Number.isInteger(result)){
            var showresult = document.getElementById("result");
            showresult.innerHTML = result;
        }
        else{
            var showresult = document.getElementById("result");
            showresult.innerHTML = result.toFixed(2);
        }
}

display_string = () => {
    text_result = document.getElementsByClassName("text")[0].value
    const sortedStr = text_result.split("").sort().join("");  
    console.log(sortedStr)
    add_text = ""
    for (let index = 0; index < sortedStr.length; index++) {
        let add = sortedStr[index] + "$ "
        add_text += add
    }
    console.log(add_text)
    var showresult = document.getElementById("string_result");
    showresult.innerHTML = add_text
}

separate_oddEven = () =>{
    names = ["vijay" , "ajai" , "rahul" , "mani" , "jeeva"]
    names_copy  = [...names]
    oddList = []
    evenList = []

    for (let index = 0; index < names.length; index++) {
        if (index % 2 == 1){
          oddList.push(names[index])
          names_copy.pop(index)
        }
        else 
         evenList.push(names[index])     
        }  
        names.splice(4, 0, "lene");
        names.splice(5, 0, "lara");
        document.getElementById("even_index").innerText += evenList
        document.getElementById("addItems").innerText += names
        document.getElementById("sort").innerText += names.sort()     
}

function sumofArray(total, num) {
    return total + num;
}

mapping_values = () =>{

    numList = [10,25,12,30,271,2625,2251,26251,2817 ]

    numList.sort(function (a,b) {
        return a - b;
    });
    console.log(numList)

    mapped_values =  numList.map(function(element){
        return element + 1
    })
    sumofArray = numList.reduce(sumofArray)
    console.log(sumofArray)
}

mapping_values()

listOfDicts = () => {
    dicts = [
        {
            "name" : "vijay",
            "age" : 20,
            "selected" : true
        },
        {
            "name" : "ajay",
            "age" : 25,
            "selected" : false
        },
        {
            "name" : "mani",
            "age" : 40,
            "selected" : false
        }
    ]

  for(let i=0; i < dicts.length ; i++){
    let object = dicts[i]
    // for (const [key, value] of Object.entries(object)) {
    //     console.log(key,":" , value)
    // }
        if(object.selected == true)
        {
            for (const [key, value] of Object.entries(object)) {
                console.log(key,":" , value)
            }
        }
  }
}

detailsList = []

getDictValues = () => {
    Name = document.getElementById('name').value
    age = document.getElementById('age').value
    country = document.getElementById('country').value
    maxListLength = 10
    details = {
        "name" : Name,
        "age" :age,
        "country" :country 
    }
    if (detailsList.length < maxListLength){ 
        detailsList.push(details)
        console.log(detailsList)
    }
    else{
        alert("list is full..")
    }
}

listOfDicts()


class calulator{
   constructor(num1 , num2){
    this.num1 = num1
    this.num2 = num2
   }
     addition(){
        var result = this.num1 + this.num2
        var select = document.getElementById("add")
        select.innerText = result
     }
     subtraction(){
        var result = this.num1 - this.num2
        var select = document.getElementById("sub")
        select.innerText = result
     }
     multiplication(){
        var result = this.num1 * this.num2
        var select = document.getElementById("mul")
        select.innerText = result
     }
}
