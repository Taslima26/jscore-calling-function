function calculateBirthYear(age){
    var currentDate=new Date();
    var currentYear=currentDate.getFullYear();
    return currentYear-age;
}

function createGreeting(name, age) {
  const birthYear = calculateBirthYear(age);
  let msg = `My Name is ${name} and birth year is ${birthYear} You are old Taslima!!!!`;
  console.log(msg);
}

  createGreeting('taslima' ,31);