document.addEventListener("DOMContentLoaded", function() {

  var $screen = $('#screen')

$("span").on("click", function(){
  let currentNumber = $(this).text()
  if (currentNumber === 'C'){
      $screen.text('');
  } else {
      $screen.append(currentNumber)
  }
});

$(".operator").on("click", function(){
  let currentOperator = $(this).text()
});

$('#equals').on('click', function() {
 var equation = $screen.text();
 var add = equation.indexOf('+')
 var subtract = equation.indexOf('-')
 var multiply = equation.indexOf('x')
 var divide = equation.indexOf('÷')
 var firstNumber = ''
 var secondNumber = ''
 var total = 0;

 if (add !== -1) {
 firstNumber = parseInt(equation.substring(0, add))
 secondNumber = parseInt(equation.substring(add + 1, equation.length))
 total = firstNumber + secondNumber
 }

 if (subtract !== -1){
   firstNumber = parseInt(equation.substring(0, subtract))
   secondNumber = parseInt(equation.substring(subtract + 1, equation.length))
   total = firstNumber - secondNumber
 }

 if (multiply !== -1){
   firstNumber = parseInt(equation.substring(0, multiply))
   secondNumber = parseInt(equation.substring(multiply + 1, equation.length))
   total = firstNumber * secondNumber
 }

 if (divide!== -1){
    firstNumber = parseInt(equation.substring(0, divide))
    secondNumber = parseInt(equation.substring(divide + 1, equation.length))
    total = firstNumber/secondNumber
  }

  if (divide!== -1){
     firstNumber = parseInt(equation.substring(0, divide))
     secondNumber = 0
     $screen.text("error")
   }

  if (typeof total === "number" && total === total && total !== Infinity){
    $screen.text(total)
  }
  else if(typeof total !== "number"){
     $screen.text("error")
  }
  })
});
