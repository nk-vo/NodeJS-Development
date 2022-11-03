const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
]

// Promises
Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch((err) => console.log(err))

// async await
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }))

    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

// for await to
const getData2 = async function () {
  const arrayofPromises = urls.map(url => fetch(url));
  for await (let request of array0fPromises) {
    const data = await request.json();
    console.log(data);
  }
}

// Callback Queue - Task Queue (WebAPI)
setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2 Job Queue - Microtask Queue: smaller but higher priority than Callback queue
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')