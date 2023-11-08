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
  image(random1);
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

function image(random1) {
  if (random1 === 0) {
    document.getElementById("imagen").src =
      "https://m.media-amazon.com/images/I/51xsQq9kUQL._AC_UF1000,1000_QL80_.jpg";
  } else if (random1 === 1) {
    document.getElementById("imagen").src =
      "https://i.pinimg.com/736x/50/bb/bb/50bbbb065f1abeb98a7fa948adb02bdc.jpg";
  } else if (random1 === 2) {
    document.getElementById("imagen").src =
      "https://t3.ftcdn.net/jpg/05/77/79/12/360_F_577791293_i3HhJIR4GIQxzcD1JNNVY3qNLohk1xGy.jpg";
  } else {
    document.getElementById("imagen").src =
      "https://i0.wp.com/literaryyard.com/wp-content/uploads/2017/11/smiling-face-funny-bird-picture.jpg";
  }
}
