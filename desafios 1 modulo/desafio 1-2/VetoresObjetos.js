const dev = {
    name: "Felipe",
    age: "32",
    technologies:[
        {name: "C++", specialty: "Desktop"},
        {name: "Python", specialty: "Data Science"},
        {name: "JavaScript", specialty: "Web/Mobile"}
    ]
}

console.log(`The user ${dev.name} is ${dev.age} years old, and uses ${dev.technologies[0].name} technology with expertise in ${dev.technologies[0].specialty}`)