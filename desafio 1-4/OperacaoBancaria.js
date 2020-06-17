const user = {
    name: `Felipe`,
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {

    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
    
}


function getHigherTransactionByType(type) {

    let hightransaction 
    let highprice = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > highprice) {
            highprice = transaction.value
            hightransaction = highprice
        }
    }
    return hightransaction

}

function getAvaragePrice() {

    let sum = 0 
    let mean = 0

    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }

        mean = sum / user.transactions.length
        return mean

}


function getTransactionCount(){


    let creditCount = 0
    let debitCount  = 0

    let transcount = {}

    for (transaction of user.transactions) {

        if (transaction.type == 'credit') {
            creditCount = creditCount + creditCount
        } else {
            debitCount++
        }

        
    }

    transcount = { credit: debitCount, debit: debitCount}
    return transcount 

}

createTransaction({type: 'debit' , value: 20})
createTransaction({type: 'credit' , value: 25})
createTransaction({type: 'debit' , value: 25})
createTransaction({type: 'credit' , value: 20})

console.log(`O saldo do ${user.name} é de ${user.balance}`)

console.log(`A maior transação de crédito foi R$ ${getHigherTransactionByType('credit')}`)
console.log(`A maior transação de Debito foi R$ ${getHigherTransactionByType('debit')}`)

console.log (`O valor médio das transações foi de R$${getAvaragePrice()}`)

console.log(`Número de transações de crédito foi de ${getTransactionCount().credit} e o número de transações de débito foi de ${getTransactionCount().debit}`)



