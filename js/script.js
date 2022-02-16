// function coding(item, funksiya) {
// console.log(`I code width ${item}`);
// funksiya()
// }
// coding("JS", () => console.log("I'm proggrammer"));

// let name = "spark";
// let color = "qora";
// let name = "5000$";
// let name = "2018";

// // davrin otti let 


// kalit qiymati juftligi 
// const car = {
//     name: "spark",
//     color: "qora",
//     name: "5000$",
//     name: "2018"
// }
// console.log(car);


// let obj = {};
// let obj = new Object({
//     name:'lkjfdalsfjlkdlk'
// })
// console.log(obj);
// console.log(console);
// console.log(Document);





// const user = {
// name: 'Ikrom',
// age: 23,
// 'isWork': true
// }

// delete user.age;
// user.from = "Uzb";
// console.log(user);
// console.log('age' in user);
// console.log('job' in user);

// console.log(user.isWork);



// const users = {
//     '1': 'backend',
//     '2': 'frontend'
// }

// // console.log(users.1); // bu hato


// console.log(users.1); // bu hato
// console.log(users['1']); // bu togride



// const users = {
//     '1': {
//         'level': 'backend',
//         age: 34,
//         address:{
//             sreet: 'naqqoshlik'
//         }
//     },
//     '2': {
//         'level': 'freontend',
//         age: 23
//     }
// }
// console.log(users[1].address['sreet']);


// console.log(users['1']); // bu togride





// const users = {
//     '1': {
//         'level': 'backend',
//         age: 34
//     },
//     '2': {
//         'level': 'freontend',
//         age: 23
//     }
// }


// users[3] = {
//     'level': 'junior',
//     age: 45
// }
// users[4] = {
//     'level': 'middle',
//     age: 35
// }

// console.log(users);







// const user = {
//     name: 'sobir',
//     age: 23,
//     sowAge: function () {
//         console.log(this.name);
//     }
// }


// user.sowAge();
// console.log(console);


// const user = {
//     name: 'sobir',
//     age: 23,
//     sowAge: function () {
//         let result = `${this.name}, ${this['age']}`;
//         return result;
//     }
// }


// console.log(user.sowAge());

const user = {
    name: 'sobir',
    age: 23,
    job: 'proggrammer',    
    address: {
        country: 'Uzbekistan',
        diskrit: 'chilonzor'
    },
    job:{
        opit: 3,
        level: 'backend'  
    }
};


for (const key in user) {
    if (typeof user[key] == 'object') {
        for (const key2 in user[key]) {
            console.log(user[key][key2]);
        }
    }else{
        console.log(user[key]);
    }
}
