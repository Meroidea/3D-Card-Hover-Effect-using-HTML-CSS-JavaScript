const card = document.querySelector(".card-body");

let mouseX = 0;
let mouseY = 0;
let cardX = 0;
let cardY = 0;
let isHovering = false;

card.addEventListener("mousemove", (e) => {
  const cardRect = card.getBoundingClientRect();
  cardX = cardRect.left + cardRect.width / 2;
  cardY = cardRect.top + cardRect.height / 2;
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!isHovering) {
    isHovering = true;
    animateCard();
  }
});

card.addEventListener("mouseleave", () => {
  isHovering = false;
  card.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
});

function animateCard() {
  if (!isHovering) return;

  const angleX = (cardY - mouseY) / 7;
  const angleY = (cardX - mouseX) / -7;
  const translateZ = 130; // Set a constant value for depth

  card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(${translateZ}px)`;

  requestAnimationFrame(animateCard);
}
