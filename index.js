const button = document.getElementById("my-button");

button.addEventListener('click', () => {
  const nav = document.getElementById("mynav");
  nav.classList.toggle('show');
  console.log("Clicked")
});

function myFunction(x) {
  x.classList.toggle("change");
}
