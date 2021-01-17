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

const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

  const makeNoise = function() {
    console.log("Pling!");
  };
  
  makeNoise();
  // → Pling!
  
  const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(power(2, 10));
  // → 1024