function changeName() {
  const nameElement = document.getElementById("name");
  if (nameElement.innerText === "Your Name") {
    nameElement.innerText = "a Web Developer!";
  } else {
    nameElement.innerText = "Your Name";
  }
}




  function toggleDescription(header) {
    const desc = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");
    desc.style.display = desc.style.display === "block" ? "none" : "block";
    arrow.textContent = arrow.textContent === "▼" ? "▲" : "▼";
  }

