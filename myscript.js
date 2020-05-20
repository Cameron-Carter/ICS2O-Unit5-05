// JavaScript File
// let statements
let today;
let age;
let saturday;
let sunday;
// function to find and alert what the user should be doin today depending on their age
function responsibilityCheck() {
  // asigning today and age to the inputs for day and age
  today = document.getElementById("dayvalue").value;
  age = document.getElementById("agevalue").value;
  // assigning saturday and sunday variables to their respective options in the select tag
  saturday = document.getElementById("saturday").value;
  sunday = document.getElementById("sunday").value;
  // I see that this code here gets redundant but I had to include both AND and OR together so I did it like this
  // alerts that user can relax because it's the weekend
  if ((age < 18) && (today == saturday || today == sunday)) {
    alert("Time to relax for the weekend!");
  }
  // same as before because this code is iniffecient; it was either this, not having an IF with AND and OR, or using variables for all the weekdays, which was said to be indesirable in the instructions
  else if (today == saturday || today == sunday) {
    alert("Time to relax for the weekend!");
  }
  // all other options are on weekdays so people under 18 have school
  else if (age < 18) {
    alert("Time for school!");
  }
  // that leaves the adults on weekdays who have work
  else {
    alert("Time to go to work!");
  }
}
// event listener for button to activate function
document.getElementById("btn").addEventListener("click", responsibilityCheck);