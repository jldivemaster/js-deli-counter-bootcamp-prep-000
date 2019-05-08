
function takeANumber(katzDeliLine, name) {
  console.log(katzDeliLine);
  console.log(name);
  //katzDeliLine.push(name);
  //var greeting = ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  //console.log(greeting);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    console.log("There is nobody waiting to be served!");
  } else {
    console.log("Currently serving ${katzDeliLine[0]}");
    katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    console.log("The line is currently empty.");
  } else {

    for (var i = 0; i < katzDeliLine.length; i++) {
      var str = "The line is currently: ";
      str += katzDeliLine[i+1] + "." + katzDeliLine[i];
    }
    console.log(str);
  }

}
