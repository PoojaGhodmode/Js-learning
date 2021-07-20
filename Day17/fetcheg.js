// Fetch api
// fetch only throw error when there is network issue

fetch("todos/part1.json")
  .then((response) => {
    console.log(response);
    //return response.text() return promise with data type of string
    return response.json();
     //return response.json() return promise with data type of object
  })
  .then((data) => {
    console.log(data, typeof data);
  })
  .catch((err) => {
    console.log(err);
  });
