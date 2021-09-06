const options = {
	name: "test",
	width: "640",
	height: "480",
	colors: {
		border: "black",
		bg: "white",
	},
};

console.log(options.name);
console.log(options["name"]);

// for (let key in options) {
//     console.log(options[key])
// }

console.log(Object.keys(options));

const option2 = {
	name: "test2",
	width: "604",
	height: "480",
	colors: {
		bg: "red",
		border: "purple",
	},
	makeTest: function () {
		console.log("Yes!");
	},
};

option2.makeTest();

myCorpObj = {
	name: "NiukCompany",
	foundingDate: "2003",
	founder: "Ivan Niukanen",
	specializations: {
		carManufacturing: {
			name: "carManufacturing",
			director: "Ilon Mask",
			foundingDate: "2010",
			fundsDollars: "2 000 000 000 000",
		},
		spaceIndustry: {
			name: `spaceIndustry`,
			director: "Yuri Gagarin",
			foundingDate: "2005",
			fundsDollars: "5 000 000 000 000",
		},
	},
	getSpecInfo: function (spec) {
		console.log(
			`This is ${myCorpObj.specializations[spec].name}, the director is ${myCorpObj.specializations[spec].director}, it was found ${myCorpObj.specializations[spec].foundingDate} \nMoney : ${myCorpObj.specializations[spec].fundsDollars}`
		);
	},
	getGeneralInfo: function (obj, outStr = "") {
		for (let key in obj) {
			if (typeof obj[key] != "function") {
				// outStr += `${key} : ${obj[key]}, `;
				// console.log(outStr);
                
                // if (typeof obj[key] == "object") {
                //     // outStr += myCorpObj.getGeneralInfo(obj[key], outStr);
                //     outStr += `${key} : \n`
                //     myCorpObj.getGeneralInfo(obj[key], outStr)
                // } else { 
                //     outStr += `${key} : ${obj[key]},  `
                // }
			}
		}
        console.log(outStr)
	},
};
myCorpObj.getGeneralInfo(myCorpObj);

myCorpObj.getSpecInfo("spaceIndustry");



//передача по значению (примитивные типы данных)
let a = 5,
   b = а;
b = b + 5;

console.log(b);
console.log(a);
//передача по ссылке
const obj = {
    a: 5,
    b: 1
}
const copy = obj;
//хотя мы модифицируем копию, менется и изначальный объект,
//так как мы в копии имеет ссылку на него
copy.a = 10;

console. log(obj);
console. log(сору);

//клонирование объекта в новый объект
const newObj = Object. assign({}, obj);
newObj.a = 15;
console.log(newObj);
//склонировать массив
const oldArray = ['a', 'x', 'y'];
const newArray = oldArray.slice();
newArray[0] = 5;
console.log(oldArray);
console.log(newArray);
//S
//Spread оператор, new features
const video = ['youtube', 'vimeo', 'facebook'],
    blogs = ['wordpress', 'twitter', 'blogger'],
    internet = [ ...video, ...blogs, 'vk', 'instagram'];

console.log(internet);
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 8];
log(...num);
//клонирование массива с помощью Spread
const ar = [4,3,0];
const NewAr = [...ar];

//клонирование объекта с помощью Spread
const aaa = {
    first: 1,
    second: 2
};  
const newA = {...aaa};