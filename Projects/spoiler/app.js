document.getElementById("myBtn").addEventListener("click", toggleSpoiler);

function toggleSpoiler() {
  const spoiler = document.getElementById("spoiler");
  spoiler.classList.toggle("closed");

  if (spoiler.classList.contains("closed")) {
    dettachSpoilerEvents();
  } else {
    attachSpoilerEvents();
  }
}

function attachSpoilerEvents() {
  document.addEventListener("keydown", handleEscape);
}

function dettachSpoilerEvents() {
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(event) {
  console.log(event.key);

  if (event.key === "Escape") toggleSpoiler();
}
