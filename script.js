var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users/1/posts");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);

  //For loop
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    //For in Loop
    for (const property in data[i]) {
      console.log(`${property}: ${data[i][property]}`);
    }
  }

  //For of
  for (const element of data) {
    console.log(element);
  }

  //For each
  data.forEach((element) => {
    console.log(element);
  });
};
