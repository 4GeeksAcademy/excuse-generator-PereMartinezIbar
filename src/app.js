/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let random1 = Math.floor(Math.random() * 4);
  let random2 = Math.floor(Math.random() * 4);
  let random3 = Math.floor(Math.random() * 3);
  let random4 = Math.floor(Math.random() * 5);
  replace(random1, random2, random3, random4);
};

function replace(random1, random2, random3, random4) {
  let text =
    who[random1] +
    " " +
    action[random2] +
    " " +
    what[random3] +
    " " +
    when[random4];
  document.getElementById("excuse").innerHTML = text;
}
