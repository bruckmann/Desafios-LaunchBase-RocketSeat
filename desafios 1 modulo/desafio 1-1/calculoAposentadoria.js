const name = "Silvana";
const sex = "F";
const age = 48;
const contributionTime = 23;

const retirement = age + contributionTime

if ((sex == 'F') || (sex == "f")) {
    if (retirement >= 85) {
        console.log(`${name}, you can be retire `)
    } else {
        console.log(`${name}, you can't retire yet `)
    }
}

if ((sex == "M") || (sex == "m")) {
    if (retirement >= 95 ) {
        console.log(`${name}, you can be retire`)
    } else {
        console.log(`${name}, you can't retire yet`)
    }
}
