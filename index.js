var usrinput = document.getElementById("usrinput")
usrinput.on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
       console.log("enter")
    }
});
fetch("https://opentdb.com/api.php?amount=1")
  .then((response) => response.json())
  .then((json) => console.log(json));