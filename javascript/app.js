function ageCalculation() {
  var enterdob = prompt("enter your DOB ", "11 8 2004");
  var dob = new Date(enterdob);
  var dobmili = dob.getTime();
  var today = new Date();
  var todaymili = today.getTime();
  var diff = todaymili - dobmili;
  var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

  document.write("<h3>Your Age is</h3>" + " " + age);
}
ageCalculation();
