'use strict'; 

// promises 

// callback tree 
console.log("Data request... ")
setTimeout(() => {
    console.log("Data preparing..."); 
    const product = { 
        name: 'phone', 
        price: '300',
    };

    setTimeout(() => {
        product.status = 'order'
        console.log(product)
    }, 2000);
}, 2000);


// same but using promise 

console.log("Data request...")
const req = new Promise((resolve, reject) => { 
    setTimeout(() => {
        console.log("Data preparing...");
        const product = { 
            name: "phone", 
            price: 300,
        }; 
        resolve(product)
    }, 2000);
})
.then((product) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            // console.log(product)
            product.status = 'order'
            resolve(product)
            // reject()
        }, 2000);

    })
    .then((data) => { 
        data.modified = true
        return data
    })
    .then((data) => { 
        console.log(data)
    })
    .catch(() => { 
        console.log("ERROR")
    })
    .finally(() => { 
        console.log("The proccess ended")
    })
})


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};


test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));
Promise.all([test(4000), test(1000)]).then(()=>{
console.log('All');
});
