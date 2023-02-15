const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const fortuneCookie = document.querySelector('#fortuneCookie');
const button = document.querySelector('#btn');
const fortunePreview = document.querySelector('#fortunePreview');

const fortunes = [
  'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
  'Quanto mais duro você trabalhar, mais sorte você terá.',
  'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
  'A perseverança é a mãe da boa sorte.',
  'Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.',
  'Sorte é estar pronto quando a oportunidade aparecer.',
  'Imagine uma nova história para sua vida e acredite nela.',
  'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
  'Pessimismo leva à fraqueza, otimismo ao poder.',
  'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
];
let index = fortunes.length;
let randomFortune;

fortuneCookie.addEventListener('click', () => {
  toggleScreen();
  randomFortune = Math.round(Math.random() * index);
  randomLuck();
});

button.addEventListener('click', toggleScreen);

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function randomLuck() {
  for (let fortune = 0; fortune < index; fortune++) {
    console.log(index);
    if (fortune == randomFortune) {
      fortunePreview.innerHTML = fortunes[randomFortune];
    }
  }
}
