function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    console.log("You are a teenager!");
  }
}

function teenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  }
  elseif (age <= 12) {
    return "You are a kid"
  }
  elseif (age > 19) {
    return "You are an grownup"
  }
  else {
    return "This is an error"
  }
}

function ternaryTeenager(age) {
  age >= 13 && age <=19 ? "You are a teenager" :
  "You are not a teenager"
}

function switchAge(age) {
  case(age) {
    switch(age >= 13 && age <=19):
      console.log("You are a teenager");
      break;
    default:
      console.log("You have an age");
  }
}
