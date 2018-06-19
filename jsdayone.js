let names = ["Shea", "Steven", "Jarid", "Joe"];
// let myCar = {
//   make: 'Nissan'
// }

var shea = names[0];
var Joe = names[names.length - 1];

Joe;

let push = names.push("Erik", "Zac");
names;
push;

let unshift = names.unshift("Brandon", "Jonathan");

unshift;
names;

let pop = names.pop();
names;
pop;

let shift = names.shift();

names;
shift;

let splice = names.splice(1, 1, "Mackenzie");
names;
splice;

// for (let i = 0; i < names.length; i++){
//   if (names[i][0] === "S"){
//     names.splice(i, 1)
//   }
// }

for (let i = names.length - 1; i >= 0; i--) {
  if (names[i][0] === "S") {
    names.splice(i, 1);
  }
}
names;

let slice = names.slice();
names;
slice;

const truthy = slice === names;
truthy;

const smallSlice = names.slice(-3);
smallSlice;
names;

/////// Object ////////

let house = {
  color: "grey",
  value: 450000,
  year: 1958,
  owner: 3,
  rooms: [
    {
      type: "Master",
      size: "300Sqft"
    },
    {
      type: "Kitchen",
      size: "100sqft"
    }
  ],
  flooring: {
    tile: "Grey",
    carpet: null,
    types: ["Tile", "Carpet", "Wood"]
  },
  addValue: function() {
    this.value += 100000;
  }
};

// let house = {
// 	color: 'grey',
// 	value: 450000,
// 	year: 1958,
// 	owner: 3,
// 	rooms: [
// 		{
// 			type: 'Master',
// 			size: '300Sqft',
// 		},
// 		{
// 			type: 'Kitchen',
// 			size: '100sqft',
// 		},
// 	],
// 	flooring: {
// 		tile: 'Grey',
// 		carpet: null,
// 		types: ['Tile', 'Carpet', 'Wood'],
// 	},
// 	addValue: function() {
// 		this.value += 100000;
// 	},
// };
// house['owner']

// var prop = prompt('What property do you want');
// prop

// alert(house.flooring[prop])

// house.addValue()
// house.value

// function carFactory(makeParam, modelParam, yearParam){
//   let newCar = {
//     make: makeParam,
//     model: modelParam,
//     year: yearParam
//   }
//   return newCar
// }

// let mine = carFactory('Nissan', 'xTerra', 2008);

// mine

// (expression to evaluate) ? (if true) : (if false)
// let instructor = 'Shea';

// instructor === "Shea" ?
//   console.log('That guy sucks!') :
//   (instructor === 'Steven') ?
//     console.log('That guy is evil!') :
//      console.log('Who are you?')

// var cohort = instructor === "Shea" ? 'DM16' : 'DM15'

// cohort

function callerbackgirl(cbFunc) {
  console.log("first");
  return cbFunc();
}

function bananas() {
  console.log("second");
  return "B-A-N-A-N-A-S";
}

console.log(callerbackgirl(bananas));

// setTimeout(function(){
//  console.log('done')
// }, 3000)

let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(elem, i, arr){
//   console.log(elem)
// })

function forEach(cbFunc) {
  for (let i = 0; i < numbers.length; i++) {
    cbFunc(numbers[i], i, numbers);
  }
}

let newArr = [];
forEach(function(elem, ind, arr) {
  newArr.push(elem + 2);
});

newArr;
