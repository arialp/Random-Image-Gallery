for (let i = 1; i <= 15; i++) {
  fetch('https://source.unsplash.com/random/400x400')
    .then(response => {
      let img = document.createElement('img');
      img.src = response.url;
      document.getElementById('image' + i).appendChild(img);
    });
}
