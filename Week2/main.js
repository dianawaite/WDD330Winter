console.log("connected week 2");

function displayText() {
    const text = document.getElementById("text").value;

    document.getElementById("display").innerHTML = text;
    
}

function factorial(n) {
    if (!Number.isInteger(n)) {
        document.getElementById("sum").innerHTML = "Invalid Number!!";
    }
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i; 
    }

    document.getElementById("sum").innerHTML = result;
}

function addUp() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const sum = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML = sum;

}

