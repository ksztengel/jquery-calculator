document.addEventListener("DOMContentLoaded", function() {
  // console.log('doc is loaded!')

  let $screen = $('#screen')

$("#buttons-container").on("click", function(){
  let currentNumber = ($(event.target).text())
  $screen.append(currentNumber)
});

$(".operator").on("click", function(){
  let currentOperator = $(event.target).text()
});
//'C' appends up on last "clear"
$('#clear').on('click', function() {
  $screen.text('');
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

 if(subtract !== -1){
   firstNumber = parseInt(equation.substring(0, subtract))
   secondNumber = parseInt(equation.substring(subtract + 1, equation.length))
   total = firstNumber - secondNumber

 }

 if(multiply !== -1){
   firstNumber = parseInt(equation.substring(0, multiply))
   secondNumber = parseInt(equation.substring(multiply + 1, equation.length))
   total = firstNumber * secondNumber

 }

 if (divide!== -1){
    firstNumber = parseInt(equation.substring(0, divide))
    secondNumber = parseInt(equation.substring(divide + 1, equation.length))
    total = firstNumber/secondNumber
    // $screen.append(total)
  }

if (typeof total === "number" && total === total){
    $screen.text(total)
  }
else if(typeof total !== "number"){
  $screen.text("error")
}
  })
});

//   $(".operator").on("click", function(){
//     let currentOperator = $(event.target).text()
//   if(number1){
//     number2 = parseInt($('screen').text(),10)
//   } else {
//     number1 = parseInt($('screen').text(),10)
//   }
//   console.log("currentOperator", currentOperator);
//   console.log("2", number2)
//
//   if (number1 && number2 && currentOperator){
//
//   if (currentOperator === '+'){
//     answer = (number1 + number2)
//   } else if (currentOperator === '-'){
//     answer = (number1-number2)
//   } else if (currentOperator === "x"){
//     answer = (number1 * number2)
//   } else if (currentOperator === '÷'){
//     answer = number1/number2
//   }
// }
