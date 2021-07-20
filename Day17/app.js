const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //   console.log(request.response, request.readyState);
      //readyState
      //0 - UNSEND [not called open() yet]
      //1 - Opened [open is called]
      //2 - header received [send() called and header and status is received]
      //3 - Loading [responseText holds partial data]
      //4 - Done [operation is complete]

      if (request.readyState === 4 && request.status === 200) {
        //10X - ABout information
        //20X - Success 200-OK
        //30X - Redirection messages
        //40X - Client error message 404-NOT FOUND
        //50X - server error message
        //   console.log(request, request.responseText);
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not fetch data");
      }
    });

    request.open("GET", `${resource}`); // readyState - 1

    request.send(); // readyState - 2
  });
};

getTodos("todos/part1.json")
  .then((data) => {
    console.log(data);
    return getTodos("todos/part2.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("todos/part3.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//callback hell
// getTodos("todos/part1.json", (err, data) => {
//   let response = !err ? data : err;
//   console.log(response);
//   getTodos("todos/part2.json", (err, data) => {
//     let response = !err ? data : err;
//     console.log(response);
//     getTodos("todos/part3.json", (err, data) => {
//       let response = !err ? data : err;
//       console.log(response);
//     });
//   });
// });

// Promise

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch something
//     //reject - error
//     //resolve - fulfiled
//     resolve("some data");
//     // reject("some error");
//   });
// };

// // 2 function

// getSomething().then(
//   (data) => {
//     console.log(data); // some data
//   },
//   (err) => {
//     console.log(err); // some error if uncommented
//   }
// );

// //or then and catch

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
