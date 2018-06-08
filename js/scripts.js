function runBeepBoop(input) {
  var result = "";
  if (validateInput(input)) {
    var numbers = createNumberRange(parseInt(input));
    result = checkAndReplace(numbers);
  } else {
    result = "Please enter valid input. Numbers should be whole numbers greater than 0 and include no special characters.";
  }
  return result;
}

function validateInput(input) {
  if (input !== "" && input >= 0 && !input.includes(".")) return true;
}

function createNumberRange(number) {
  var numberRange = [];
  for(var i = 0; i <= number; i++) {
    numberRange.push(i);
  }
  return numberRange;
}

function checkAndReplace(numbers) {
  for(var i = 0; i < numbers.length; i++) {
    if (divisibleBy3(numbers[i])) {
      newMessage = "I'm sorry, Dave. I'm afraid I can't do that.";
      numbers[i] = newMessage;
      continue;
    } else if (numberContains(numbers[i], 1)) {
      newMessage = "Boop!";
      numbers[i] = newMessage;
      continue;
    } else if (numberContains(numbers[i], 0)) {
      newMessage = "Beep!";
      numbers[i] = newMessage;
    }
  }
  console.log(numbers);
  return numbers.join(" ");
}

function divisibleBy3(number) {
  if (number % 3 === 0 && number !== 0) return true;
}

function numberContains(number, valueToCheck) {
  var numberString = number.toString();
  if (numberString.includes(valueToCheck)) return true;
}

function displayResult(result) {
  $("#result-box").hide().fadeIn(800);
  $("#result").text(result);
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var input = $("#input").val();
    var result = runBeepBoop(input);
    console.log(result);
    displayResult(result);
  });
});
