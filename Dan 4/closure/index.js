// Arrow function

// function saberi(a, b) {
//     return a + b;
// }

// let zbir = (a, b) => a + b;

// function isPositive(num) {
//     return num > 0;
// }

// let positiveNum = num => {
//     return num > 0;
// }

// document.addEventListener('click', function () {
//     console.log('Document clicked!')
// })

// document.addEventListener('click', () => console.log('Document clicked!'))

// Promises intro

let promise = new Promise((resolve, reject) => {
  let sum = 1 + 0;
  if (sum > 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

console.log(promise);

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("Finally some other message");
  });

// //Return promise as function result and add more arguments and conditions

function getArg(arg) {
  return new Promise((resolve, reject) => {
    if (arg > 0) {
      resolve({ arg, message: "Pozitivan broj" });
    } else if (arg === 0) {
      resolve({ arg, message: "Pozitivna nula." });
    } else {
      reject({ arg, message: "Manje od nule." });
    }
  });
}

getArg(-4)
  .then((res) => console.log(res.message + "Arg info:" + res.arg))
  .catch((res) => alert("False"));

// getInfo(1 - 8).
//     then((res) => console.log(res.message + ' Info: ' + res.arg)).
//     then(() => console.log('Something else after resolve.')).
//     catch((res) => console.log(res.message + ' Info: ' + res.arg));

const submitFormOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Forma jedan je submitovana.");
  }, 2000);
});
const submitFormTwo = new Promise((resolve, reject) => {
  resolve("Forma dva je submitovana.");
});
const submitFormThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Forma tri je submitovana.");
  }, 3000);
});

//Wait for each one to be resolved

Promise.all([submitFormOne, submitFormTwo, submitFormThree]).then((messages) =>
  console.log(messages)
);

//First one to finish (resolved)

Promise.race([submitFormOne, submitFormTwo, submitFormThree]).then((message) =>
  console.log(message)
);
