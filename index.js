const body = document.querySelector(".body");

body.addEventListener("click", function (e) {
  const getPositionX = e.clientX;
  const getPositionY = e.clientY;
  const newDiv = document.createElement("div");

  newDiv.style.width = "150px";
  newDiv.style.height = "150px";
  newDiv.style.borderRadius = "50%";
  newDiv.style.border = "1px solid";
  newDiv.style.position = "absolute";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  newDiv.style.backgroundColor = "#" + randomColor;

  newDiv.style.left = getPositionX - 75 + "px";
  newDiv.style.top = getPositionY - 75 + "px";

  body.appendChild(newDiv);
});
