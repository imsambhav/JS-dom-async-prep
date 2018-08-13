document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getFromInternet);

const output = document.getElementById('output');

// Get local txt file data
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => (output.innerHTML = data))
    .catch(err => (output.innerHTML = err));
}

// Get local JSON file data
function getJSON() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let content = '';
      data.forEach(function(cont) {
        content += `
        <div><li>Name: ${cont.name}</li>
        <li>Hobbies: ${cont.hobbies}</li><div><br>
        `;
      });
      output.innerHTML = content;
    })
    .catch(err => (output.innerHTML = err));
}

// Get from remote internet API
function getFromInternet() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let content = '';
      data.forEach(function(user) {
        content += `
        <div>
        <img style="width: 330px; height: 330px;" src="${
          user.avatar_url
        }" alt="user avatar">
        <h4>Name: ${user.login}</h4>
        <div>
        <br>
        `;
      });
      output.innerHTML = content;
    })
    .catch(err => (output.innerHTML = err));
}
