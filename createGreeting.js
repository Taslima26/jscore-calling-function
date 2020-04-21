function createGreeting(name, age) {
    const birthYear = calculateBirthYear(age);
    let msg = `My Name is ${name} and my year of birth is ${birthYear} You are old!`;
    console.log(msg);
}
