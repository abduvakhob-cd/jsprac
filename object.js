"use strict";

const person = {
  name: `samar`,
  lastName: `Abdurzzakov`,
  age: 19,
  wishes: [],
  language: function () {},
  mother: {
    name: `ona`,
  },
};

const obj = {
  name: `div`,
  width: 400,
  height: 400,
  colors: {
    border: `crimson`,
    bg: `coral`,
  },
};

console.log(Object.keys(obj).length);
for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(`property ${key} value ${obj[key][i]}`);
    }
  } else {
    console.log(`property ${key} value ${obj[key]}`);
  }
}

const newMethod = {
  makeEx: function () {
    console.log(`it is your first method`);
  },
};
newMethod.makeEx();

const option = {
  colors: {
    bg: "crimson",
    border: "coral",
  },
};

const { bg, border } = option.colors;
console.log(bg);
