
function calculateResult(){
  let n = document.getElementById("subjects").value;
  let total = 0;

  for(let i = 1; i <= n; i++){
    let marks = parseFloat(prompt("Enter marks for Subject " + i));
    total += marks;
  }

  let average = total / n;
  let grade;
  let status;

  if(average >= 90){
    grade = "A";
  }
  else if(average >= 75){
    grade = "B";
  }
  else if(average >= 60){
    grade = "C";
  }
  else if(average >= 50){
    grade = "D";
  }
  else{
    grade = "E";
  }

  if(average >= 40){
    status = "PASS";
  }
  else{
    status = "FAIL";
  }

  document.getElementById("result").innerHTML =
    "Grade: " + grade + "<br>" +
    "Result: " + status;
}
