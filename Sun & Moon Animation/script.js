const randomNumber = () => Math.floor(Math.random() * 101);

const background = document.querySelector(".night-sky");

const randomStarProperties = new Array(50).fill(5).map(_ => ({
  x: randomNumber(),
  y: randomNumber(),
  delay: randomNumber() / 12,
  blinkDuration: randomNumber() / 10,
}));

randomStarProperties.forEach(randomStar => {
  const star = document.createElement("span");
  star.classList.add("star-animation");
  star.style.top = `${randomStar.x}%`;
  star.style.left = `${randomStar.y}%`;
  star.style.animationDelay = `${randomStar.delay}s`;
  star.style.animationDuration = `${randomStar.blinkDuration}s`;
  background.appendChild(star);
});