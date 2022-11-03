const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise one resolved");
  }, 3000);
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise two rejected");
  }, 3000);
});

Promise.allSettled([promiseOne, promiseTwo])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("something fail", error);
  });
