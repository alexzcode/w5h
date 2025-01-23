let qno = 1;
let waiting = false;
let correct = "";
let selected = 0;
let as = [];
var q = document.getElementById("q")
var a = document.getElementById("a")
var btn1 = document.getElementById("a1")
var btn2 = document.getElementById("a2")
var btn3 = document.getElementById("a3")
var btn4 = document.getElementById("a4")
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
function question(qs,aw,ac,rawjson) {
  console.log(rawjson)
  correct = ac;
  as = [];
  as.push(aw[0])
  as.push(aw[1])
  as.push(aw[2])
  as.push(ac)
  qs = htmlDecode(qs);
  q.innerText = "Question "+String(qno)+": "+String(qs)
  btn1.innerText = htmlDecode(as[0])
  btn2.innerText = htmlDecode(as[1])
  btn3.innerText = htmlDecode(as[2])
  btn4.innerText = htmlDecode(as[3])
  if (btn1.innerText === "undefined") {
    btn1.style = "display: none;"
  } else {
    btn1.style = "display: block;"
  }
  if (btn2.innerText === "undefined") {
    btn2.style = "display: none;"
  } else {
    btn2.style = "display: block;"
  }
  if (btn3.innerText === "undefined") {
    btn3.style = "display: none;"
  } else {
    btn3.style = "display: block;"
  }
  if (btn4.innerText === "undefined") {
    btn4.style = "display: none;"
  } else {
    btn4.style = "display: block;"
  }
}
fetch("https://opentdb.com/api.php?amount=1")
  .then((response) => response.json())
  .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
function one() {
  if (btn1.innerText === correct) {
    a.innerText = "Correct!"
    a.style = "color: green;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  } else {
    a.innerText = "Incorrect!"
    a.style = "color: red;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  }
  qno = qno + 1;
}
function two() {
  if (btn2.innerText === correct) {
    a.innerText = "Correct!"
    a.style = "color: green;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  } else {
    a.innerText = "Incorrect!"
    a.style = "color: red;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  }
  qno = qno + 1;
}
function three() {
  if (btn3.innerText === correct) {
    a.innerText = "Correct!"
    a.style = "color: green;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  } else {
    a.innerText = "Incorrect!"
    a.style = "color: red;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  }
  qno = qno + 1;
}
function four() {
  if (btn4.innerText === correct) {
    a.innerText = "Correct!"
    a.style = "color: green;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  } else {
    a.innerText = "Incorrect!"
    a.style = "color: red;"
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((json) => question(json.results[0].question,json.results[0].incorrect_answers,json.results[0].correct_answer,json));
  }
  qno = qno + 1;
}