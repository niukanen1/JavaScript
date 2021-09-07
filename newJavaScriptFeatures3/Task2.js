"use strict"; 

const person = { 
    name: "Ethan", 
    age: "29"
}

let toServer = JSON.stringify(person); 

console.log(toServer)

let fromServer = JSON.parse(toServer)

console.log(fromServer);


const clone = JSON.parse(JSON.stringify(person))

clone.name = "Ann"
console.log(person)
console.log(clone)



// TASK ITSELF 

//  create object
const worker = { 
    name: "John", 
    age: "35", 
    car: "Impala", 
    job: "car mechanic",
    hasGun: "YES",
    children : { 
        olderSon: "Dean", 
        youngerSon: "Sam",
    }
}

// convert object to JSON 
let jsonWorker = JSON.stringify(worker)
console.log(jsonWorker)

// convert JSON back to object 

let objWorker = JSON.parse(jsonWorker)
console.log(objWorker)


// XML version
// <?xml version="1.0" encoding="UTF-8"?>
// <root>
//    <age>35</age>
//    <car>Impala</car>
//    <children>
//       <olderSon>Dean</olderSon>
//       <youngerSon>Sam</youngerSon>
//    </children>
//    <hasGun>YES</hasGun>
//    <job>car mechanic</job>
//    <name>John</name>
// </root>


const johnClone = worker

johnClone.name = "Henry"
johnClone.job  = "secret society agent"


console.log(johnClone)
console.log(worker)