function changeName() {
  const nameElement = document.getElementById("name");
  if (nameElement.innerText === "Your Name") {
    nameElement.innerText = "a Web Developer!";
  } else {
    nameElement.innerText = "Your Name";
  }
}
