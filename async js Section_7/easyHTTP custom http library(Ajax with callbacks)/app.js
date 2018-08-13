const http = new easyHTTP();

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create DATA
const data = {
  title: 'User name',
  body: 'This user is special'
};

// Post posts request
// http.post('https://jsonplaceholder.typicode.com/posts/', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// PUT (update) posts request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   err,
//   post
// ) {
//   if (err) console.log(err);
//   else console.log(post);
// });

// DELETE posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
