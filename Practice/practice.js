//  selectors
// id selector

// let logParagraph = $("#myParagraph");
// console.log(logParagraph);

// console.log($("span"));

// console.log($(".myDiv"));

// \/\/\/  updateing contents  \/\/\ //

// $("div").remove();// removes our parent <div> with child <p>s
// $("div").empty();// removes only the child <p>s

// \/\/\/ updateing elements \/\/\ //

//  before : handy when shifting contents from one place to the other

// $("#divId").before($("#firstPar"));

// after : useful to add contents after the selected element

// $("#divId").after($("#firstPar"));

// prepend : handy to add contents on the top of the selected

// $("#divId").prepend($("#firstPar"));

// append : useful to add contents at the bottom of the selected element

// $("#divId").append($("#firstPar"));

// \/\/\/ aaltering value \/\/\/ //

// add class : useful for adding style and to the element using clss

// $("p").addClass("classOne classTwo");

// remove class : useful for removing class from the element

// $("p").removeClass("classOne");

// css : useful for directly writing styles to the elment

// $("p").css("background-color", "green");

// \/\/\/ form value \/\/\/ //

// val : useful for fetching the input from the input section

// console.log($("#firstInput").val())

// isNumeric : handy for doing a condition for then the value is a number

// let inputValue = $("#firstInput").val()

// console.log($.isNumeric(inputValue))

// \/\/\/ finding elements (traversing) \/\/\/ //

// \/\/\/ traversing down  \/\/\/ //

// parent : handy to select the parent while insterting the child node (returns the direct parent of the element)

// $(document).ready(function () {
//     $("ul").parent().css({ border: "2px solid red" });
//     });

// parents : handy to select all the parent above the element

// $("li").parents().css({ border: "2px solid blue" });

// \/\/\/ traversing up  \/\/\/ //

// children : useful when we want to select the all the children

// $(document).ready(function () {
//   $("div").children().css({ border: "2px solid" });
// });

// find : useful when finding an element and handy to selct using a particular element

// $("div").find("li").css({ border: "2px solid red" });

// \/\/\/ traversing sideways  \/\/\/ //

// $("span").siblings().css({ border: "4px solid red" });

// $("span").next().css({ border: "4px solid red" });

// $("p").nextAll().css({ border: "4px solid red" });

// \/\/\/ looping through elements  \/\/\/ //

// \/\/\/ looping through vanila js \/\/\/ //

// var element1 = document.getElementsByTagName("li");
// for (let i = 0; i < element1.length; i++) {
//   var allLi = element1[i];
//   allLi.style.backgroundColor = "pink";
// }

// \/\/\/ looping through jQuery.js \/\/\/ //

// $("li").css("background-color", "pink");

// \/\/\/ handling events \/\/\/ //

// $( "p" ).on(
//     "click", function() { console.log( "<p> was clicked" );
//     });

// binding multiple events : useful to binde multiple events

// $("div").on({
//   click: function () {
//     console.log("clicking div");
//   },
//   mouseenter: function () {
//     $("div").css("background-color", "yellow");
//     // console.log("mouseEntering div");
//   },
//   mouseleave: function () {
//     console.log("mouseleaving div");
//   },
// });
// binding multiple things to one event : handy to do more than one action with one envent

// $("input").blur(function () {
//   $("input").css("background-color", "red");
//   alert("This text box has lost its focus");
// });

// $("input").keypress(function () {
//   $("label").css("background-color", "pink");
// });

// $("form").on("submit", backgroundChanger);
// function backgroundChanger() {
//   $("#firstInput").css("background-color", "pink");
// }

// \/\/\/ Effects and animation in jQuery \/\/\/ //

// toggle : handy when you wnat to hide and show an element when an event occured

// $("p#firstPar").on("click", function () {
//   $("p#thirdPar").toggle(1000);
// });

// $("#myButton").click(function () {
//   $("#thirdPar").slideUp(3000);
//   console.log(1)
// });

// $("#myButton").click(function () {
//   $("#thirdPar").slideDown(3000);
//   console.log(0)

// });

// slideToggle : handy for nav bar section or drop down menu to attach list items

// $("#myButton").click(function () {
//   $("#thirdPar ").slideToggle(3000);
//   $("#firstPar ").slideToggle(3000);
// });

/// fade in and fade out : handy for making an element hide or show depends on the situation

$("#myButton").click(function () {
  // $("#firstPar").fadeOut();
  // $("#secondPar").fadeOut("slow");
  $("#thirdPar").fadeOut(3000);
});

$("#myButton").click(function () {
  $("#thirdPar").fadeIn(1000);
});

$("#myButton").click(function () {
  $("#thirdPar").delay(3000).slideToggle();
});

$("#myButton").click(function () {
  $("#fourthPar").animate({ height: 300 }, "3000");
  $("#fourthPar").animate({ width: 300 }, "3000");
  $("#fourthPar").css("background-color", "blue");
});

console.log("button 2 clicked");

$("#button1").click(function () {
  $("p").last().slideUp(3000);
  console.log("button 1 clicked");
});

$("#button2").click(function () {
  $("p").last().stop(); // stops the above slideUp effect if clicked
  console.log("button 2 clicked");
});

// $.map handy to perform a function to each item in an array and map to a new array
let x = $.map([0, 1, 2], function (n) {
  return n + 4;
});

// console.log(x);

var dimensions = { width: 10, height: 15, length: 20 };
dimensions = $.map(dimensions, function (value, key, index) {
  return value * 2 + ":" + key;
});
// console.log(dimensions)

$.map([0, 1, 52, 97], function (a) {
  return a > 50 ? a - 45 : null;
});

var array = [0, 1, 52, 97];
array = $.map(array, function (a, index) {
  return [a - 45, index];
});

// console.log(array)
let value = [9, 10];
let scoredBalls = [];
let initialBalls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// balls = $.map(balls, function (a, index) {
// return ( value === a[index] ? null : a );
// return if (value=== a[index]){
//   a[index]
// }else {
//   scoredBall.push(balls[i]);
//   delete balls[i];
// }
// });

// for (let i = 0, j = 0; i < initialBalls.length && j < value.length; i++, j++) {
//   if (value[i] !== initialBalls[j]) {
//     continue;
//     //i stay where you are and j keep on looping to the next index
//     // after j finishes one loop the change i to the next index
//   } else {
//     scoredBall.push(balls[i]);
//     delete balls[i];
//   }
//   // Code to execute for each pair of i and j
//   // console.log(initialBalls[i], value[j]);
// }

// for (let i = 0 ; i< initialBalls.length ; i++){

//   console.log(value[0] , initialBalls[i])
//   for (let j = 0 ; j<value.length; j++){

//   }
// }
for (let j = 0; j < value.length; j++) {
  for (let i = 0; i < initialBalls.length; i++) {
    if (value[j] !== initialBalls[i]) {
      continue;
      //i stay where you are and j keep on looping to the next index
      // after j finishes one loop the change i to the next index
    } else {
      scoredBalls.push(initialBalls[i]);
      initialBalls.splice(i, 1); // from index 1 remove 1 element
      // delete initialBalls[i];
    }
    console.log(value[j], initialBalls[i]);
  }
}

console.log(initialBalls);
// console.log(scoredBalls);

let balls = {
  1: `
    <div class = "scaling-svg-container"><svg
    class="scaling-svg"
style="padding-bottom:92%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <circle cx="100" cy="100" r="100" fill="#F1C40F" />
      <circle cx="100" cy="100" r="50" fill="white" />
      <text
        x="100"
        y="115"
        font-family="Arial"
        font-size="54"
        font-weight="bold"
        text-anchor="middle"
        fill="black"
      >
        1
      </text>
      <ellipse
        cx="60"
        cy="35"
        rx="30"
        ry="20"
        fill="white"
        opacity="0.2"
        transform="rotate(-31 60 35)"
      />
    </svg></div>`,
  2: `<div class = "scaling-svg-container"><svg
    class="scaling-svg"
style="padding-bottom:92%"
 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <circle cx="100" cy="100" r="100" fill="blue"/>
  <circle cx="100" cy="100" r="50" fill="white"/>
  <text x="100" y="115" font-family="Arial" font-size="54" font-weight="bold" text-anchor="middle" fill="black">2</text>
  <ellipse cx="60" cy="35" rx="30" ry="20" fill="white" opacity="0.4" transform="rotate(-31 60 35)"/>
</svg></div>`,
  3: `<div class = "scaling-svg-container"><svg 
   class="scaling-svg"
style="padding-bottom:92%"
  
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <circle cx="100" cy="100" r="100" fill="#C62828"/>  <circle cx="100" cy="100" r="50" fill="white"/>
  <text x="100" y="115" font-family="Arial" font-size="54" font-weight="bold" text-anchor="middle" fill="#424242">3</text>
  <ellipse cx="60" cy="35" rx="30" ry="20" fill="white" opacity="0.2" transform="rotate(-31 60 35)"/>
</svg></div>`
};
console.log(balls[2]);
let number1 = `<img src="assets/1-ball.svg">`;
let scoredBalls1 = $("#scored-balls");
let clickBtn = $("button:eq(2)");
clickBtn.click((event) => {
  event.preventDefault();

  scoredBalls1.append(`<li>${balls[1]}</li>`);

  console.log("one");
});
console.log(clickBtn);
