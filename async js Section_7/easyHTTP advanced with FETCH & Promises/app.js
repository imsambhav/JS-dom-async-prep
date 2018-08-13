const http = new EasyHTTP();

// // Get Users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// USER DATA
const data = {
  name: 'Magy Castillo',
  username: 'crazygirl',
  email: 'mountaingirl11@gmail.com'
};

// // Create Post req.
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Create a PUT req., Update User
// http
//   .put('https://jsonplaceholder.typicode.com/users/3', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create a HTTP DELETE req
http
  .delete('https://jsonplaceholder.typicode.com/users/3')
  .then(data => console.log(data))
  .catch(err => console.log(err));
