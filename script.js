const tips = [
  "Du kan väl ta en promenad runt Årstaviken?",
  "Varför inte ta ett dopp vid Vinterviken?",
  "Du kan spela pingis och dricka en öl på Ugglan.",
  "Du kanske vill kolla en fotbollsmatch på Retro Nytorget?",
  "Du kan väl kolla en utställning på Fotografiska och ta en kaffe?",
  "Ta båten till en skärgårdsö och bara häng.",
  "Spela boule på Boulebar Tanto?",
  "Gå upp på Skinnarviksberget och kolla solnedgången.",
  "Hyra en kajak på Långholmen och glida runt?",
  "Gå till Big Ben och få dig ett garv."
];

const button = document.getElementById('tip-button');
const headline = document.querySelector('h1.tip');
const footer = document.querySelector('.footer');

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => button.classList.remove('clicked'), 250);

  headline.classList.remove('visible');
  setTimeout(() => {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    headline.innerHTML = tip;
    headline.classList.add('visible');
  }, 100);
});

window.addEventListener('scroll', () => {
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    footer.classList.add('visible');
  }
});