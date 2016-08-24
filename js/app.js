document.addEventListener("DOMContentLoaded", function() {
    console.log('doc is loaded!')

  let $screen = $('#screen')
  //where do I store declare variables for the a,b?
$("#buttons-container").on("click", function(){
  let currentNumber = parseInt($(event.target).text())
  $screen.append(currentNumber)
})

$('#clear').on('click', function() {
  $screen.text('');
  });

  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function subtract(a, b) {
    return a - b;
  }
  $(".operator").on("click", function(){
    let currentOperator = $(event.target).text()
    $screen.append(currentOperator)

  switch(currentOperator) {
      case '/':
        operation = divide(a, b);
        //need /0 case === ERROR
        break;
      case 'x':
        operation = multiply(a, b);
        break;
      case '-':
        operation = subtract(a, b);
        break;
      case '+':
        operation = add(a, b);
        break;
    }
    $('#equals').on('click', function() {
        $screen.text();
      });

    })
});
