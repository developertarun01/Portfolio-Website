const button = document.getElementById("my-button");

button.addEventListener('click', () => {
  const nav = document.getElementById("mynav");
  nav.classList.toggle('show');
  console.log("Clicked")
});

function myFunction(x) {
  x.classList.toggle("change");
}

// // JavaScript to randomize the positions, sizes, and delays of floating boxes
// const boxes = document.querySelectorAll('.floating-box');

// boxes.forEach(box => {
//   // Random starting position on the X-axis
//   const randomX = Math.floor(Math.random() * window.innerWidth);

//   // Random delay for staggered animation start
//   const randomDelay = Math.random() * 5;

//   // Random size between 20px and 70px
//   const randomSize = Math.floor(Math.random() * 50) + 20;

//   // Apply styles to each box
//   box.style.left = `${randomX}px`;
//   box.style.width = `${randomSize}px`;
//   box.style.height = `${randomSize}px`;
//   box.style.animationDelay = `${randomDelay}s`;
// });

// Set the spawn area dimensions (e.g., boxes will spawn within these boundaries)
const spawnWidth = window.innerWidth * 0.85;  // 80% of the screen width
const spawnHeight = window.innerHeight * 2;  // 50% of the screen height

const boxes = document.querySelectorAll('.floating-box');

boxes.forEach(box => {
  // Random starting position within the defined spawn area
  const randomX = Math.floor(Math.random() * spawnWidth);  // X within spawn area width
  const randomY = Math.floor(Math.random() * spawnHeight);  // Y within spawn area height

  // Random delay for staggered animation start
  const randomDelay = Math.random() * 5;

  // Random size between 30px and 100px
  const randomSize = Math.floor(Math.random() * 50) + 20;

  // Apply styles to each box
  box.style.left = `${randomX}px`;  // Set X position
  box.style.top = `${randomY}px`;   // Set Y position
  box.style.width = `${randomSize}px`;
  box.style.height = `${randomSize}px`;
  box.style.animationDelay = `${randomDelay}s`;
});
