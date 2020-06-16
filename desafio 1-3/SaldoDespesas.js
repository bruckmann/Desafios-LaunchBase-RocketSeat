const users = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
    ];    

function checkBalance(recipe , expenses) {
    
    const recipeChek = SumNumber(recipe)
    const expenseChek = SumNumber(expenses)

    return recipeChek - expenseChek 

}


function SumNumber(numbers) {
    
    let sum = 0 

    for (let number in numbers) {
        sum += number
    }

    return sum

}

for (let user of users) {
    
    const balance = checkBalance(user.receitas, user.despesas)

    if (balance > 0 ) {
        console.log(`${user.nome} your balance is positive of U$ ${balance} `)
    } else {
        console.log(`${user.nome} your balance is U$ ${balance} negative `)
    }


}
