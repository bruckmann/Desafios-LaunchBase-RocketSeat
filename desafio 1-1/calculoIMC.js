const name = "Felipe Brückmann";
const weight = 90;
const height = 1.88;

const imc = weight / (height * height)

if (imc >= 30 ) {
    console.log(`${name}, you're overweight`)
}

if (imc < 29.9) {
    console.log(`${name}, you're not overweight`)
}