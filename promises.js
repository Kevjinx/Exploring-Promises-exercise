// function num1() {
//   return 1;
// }
// async function num2() {
//   return 2;
// }

// console.log('num1', num1());
// console.log('num2', num2());
// console.log('num2', num2().then(result => console.log(result)))

// async function waiting() {
//   const value = await num2();
//   console.log('waiting', value);
// }
// waiting();


// // async function waitForMyPromise() {
// //   const promise = new Promise((resolve) => {
// //       setTimeout(() => {
// //           resolve('done!!!');
// //       }, 1000)
// //   });

// //   const result = await promise;
// //   console.log('my promise is', result);
// // }
// // waitForMyPromise();


// async function customPromise() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve('hello')
//     }, 5000)
//   }).catch(reject => {
//     console.log(reject)
//   })
//   const sayHello = await promise
//   console.log('after 5.0000012 seconds, Diana says ' + sayHello)
// }



// const newPromise = () => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('System of a Down')
//     }, 5009)
//   }).then(result => console.log('another one -' + result ))
// }

function wait(ms) {
  return new Promise(resolve => setTimeout(() => {
    resolve('ahhh suhhh here ')
  }, ms));
}


async function anotheranotherPromise() {
  const result = await wait(4000)
  console.log(result)
}

anotheranotherPromise()

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function doStuff() {
  await wait(2000)
  // await wait(2000) just tells us to wait 2 seconds and then go on
  console.log('The waiting is over!')
}
doStuff();

const tryRandomPromise = (random) => new Promise((resolve, reject) => {
  if (random > 0.5) {
      resolve('success!!!');
  } else {
      reject('random error');
  }
});

tryRandomPromise(Math.random()).then(result => console.log(result))



// for (let i=1; i<10; i++) {
//   const random = Math.random();
//   wait(2000 + random*1000)
//       .then(() => tryRandomPromise(random))
//       .then(result => console.log('random try #', i, result))
//       .catch(error => console.error('random try #', i, error));
// }
