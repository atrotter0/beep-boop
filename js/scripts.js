function createNumberRange(number) {
  var numberRange = [];
  for(var i = 0; i < number + 1; i++) {
    numberRange.push(i);
  }
  return numberRange;
}

function runBeepBoop(numbers) {
  numbers.forEach(function(number, index) {
    if (divisibleBy3(number)) {
      newMessage = "I'm sorry, Dave. I'm afraid I can't do that.";
      numbers[index] = newMessage;
    } else {
      //alert("You broke it...");
    }
  });
  return numbers;
}

function divisibleBy3(number) {
  if (number % 3 === 0 && number !== 0) return true;
}

$(document).ready(function() {
  //var input = $("#input").val();
  var input = 12;
  var numbers = createNumberRange(input);
  console.log(numbers);
  var result = runBeepBoop(numbers);
  console.log(result);
});