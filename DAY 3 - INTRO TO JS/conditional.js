//conditional

//conditionals: if statament
let age = 17;

if (age >= 18){
    console.log("you are eligible to vote")

} else{
    console.log("you are not eligible to vote")
}

//if else statements
let tempeture = -1;
if (tempeture < 0){
    console.log("it is freezing!");
} else if (tempeture >= 0 && tempeture <20){
    console.log("ist cool outside");

} else {
    console.log("its a warm dat");
}

//conditionals; switch statement
let day = 'friday';

switch (day){
    case 'Monday':
        console.log("it is the start of the week");
    break 
    case "friday":
        console.log('it is th end of the week')
    break;
    default:
        console.log("this is an ordinary day")
        break
}