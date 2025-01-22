let qno = 1;
let waiting = false;
var q = document.getElementById("q")
var a = document.getElementById("a")
var btn1 = document.getElementById("a1")
var btn2 = document.getElementById("a2")
var btn3 = document.getElementById("a3")
var btn4 = document.getElementById("a4")
function question(qs,a11,a22,a33,a44) {
  q.innerText = "Question "+String(qno)+": "+String(qs)
  a.innerText = "Waiting on answer..."
  btn1.innerText = a11
  btn2.innerText = a22
  btn3.innerText = a33
  btn4.innerText = a44
}
fetch("https://opentdb.com/api.php?amount=1")
  .then((response) => response.json())
  .then((json) => question(json.results[0].question,"a 1","a 2","a 3","a 4"));
function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}