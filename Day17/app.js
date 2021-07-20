const getTodos = (callback) => {
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
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); // readyState - 1

  request.send(); // readyState - 2
};


getTodos((err, data) => {
  let response = !err ? data : err;
  console.log(response);
});




