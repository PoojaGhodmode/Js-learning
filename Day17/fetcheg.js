// Fetch api
// fetch only throw error when there is network issue

// fetch("todos/part1.json")
//   .then((response) => {
//     console.log(response);
//     //return response.text() return promise with data type of string
//     return response.json();
//     //return response.json() return promise with data type of object
//   })
//   .then((data) => {
//     console.log(data, typeof data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await

// async always returns a promise
const getTodos = async () => {
  const response = await fetch("todos/part1.json");
  // await => once promise is resolved it assign value to variable response
  if (response.status !== 200) {
    throw new Error("could not fetch data");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  }); 
