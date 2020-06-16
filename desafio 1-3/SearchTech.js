const users = [
    { name: "Carlos", tec: ["HTML", "CSS"] },
    { name: "Jasmine", tec: ["JavaScript", "CSS"] },
    { name: "Tuane", tec: ["HTML", "Node.js"] }
];

for (let user of users) {
    console.log(`The user ${user.name} work with ${user.tec.join(", ")}`)
}

function userCheck(users) {
    for (let tech of users.tec) {
        if (tech=="CSS") return true     
        } 
        
    return false

}


for (let i = 0; i < users.length;i++) {
    
    const verifyCSS = userCheck(users[i])

    if (verifyCSS) {
        console.log(`The user ${users[i].name} work with CSS`)
    }
}