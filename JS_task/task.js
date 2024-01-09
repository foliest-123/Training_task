
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
    var word_list = text_result.split(" ")
    var new_array = []
    for (let index = 0; index < word_list.length; index++) {
        new_array[index] =  '$' + word_list[index]   
    }
    var showresult = document.getElementById("string_result");
    showresult.innerHTML = new_array.sort()
    console.log(new_array.sort())
}

