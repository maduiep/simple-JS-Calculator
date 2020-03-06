function calc() { // a named function

    var firstInput = parseInt(document.querySelector('#value-1').value); // The firstInput field
    var secondInput = parseInt(document.querySelector('#value-2').value); // The secondInput field
    // parseInt converts the value to  number instead of a string
    var operator = document.querySelector('#operator').value;
    var calculate;

    // if statements for the caculator
    if (operator == "add") { // condition for addition
        calculate = firstInput + secondInput; 
    } else if (operator == "min") { // condition for substracion
        calculate = firstInput - secondInput; 
    } else if (operator == "div") { // condition for division
        calculate = firstInput / secondInput;
    } else if (operator == "mul") { // condition for multiplication
        calculate = firstInput * secondInput;
    }

    document.querySelector("#result").innerHTML = calculate; // displays the result on the browser
    console.log(calculate); // logs the result in the console
}

