const button = document.querySelector('#button');
const list = document.querySelector('#list');

const sound = new Howl({
  src: ['sound/bananaboat.mp3'],
  loop: true,
  volume: 0.225,
});

button.addEventListener('click', (e) => {
  sound.play();
  button.disabled = true;
  button.classList.add('disabled');

  for (let i = 0; i < 100; i++) {
    axios
      .get('https://rapidapi.p.rapidapi.com/generic/getaname', {
        headers: {
          'x-rapidapi-host': 'random-nigerian-names.p.rapidapi.com',
          'x-rapidapi-key':
            '50f17c85acmshc63432788d36446p1f073ejsnc086e964e83c',
          useQueryString: true,
        },
      })
      .then((res) => {
        window.speechSynthesis.speak(
          new SpeechSynthesisUtterance(res.data.data)
        );
        list.innerHTML += `
          <li class="item list-group-item"> ${res.data.data} </li>
        `;
      });
  }
});
