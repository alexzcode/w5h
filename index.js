var usrinput = document.getElementById("usrinput");
usrinput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed!");
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
});
