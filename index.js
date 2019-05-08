
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var greeting = ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  return(greeting);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    return ("Currently serving ${katzDeliLine[0]}");
    katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  } else {

    for (var i = 0; i < katzDeliLine.length; i++) {
      var str = "The line is currently: ";
      str += katzDeliLine[i+1] + "." + katzDeliLine[i];
    }
    return (str);
  }

}
