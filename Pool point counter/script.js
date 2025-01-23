let total = [];

let value = []; //for the values that are scored
let scoredBalls = [];
let initialBalls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let svgBall = [];
const balls = {
  1: `<img src="./assets/1-ball.svg"></img>`,
  2: `<img src="./assets/2-ball.svg"></img>`,
  3: `<img src="./assets/3-ball.svg"></img>`,
  4: `<img src="./assets/4-ball.svg"></img>`,
  5: `<img src="./assets/5-ball.svg"></img>`,
  6: `<img src="./assets/6-ball.svg"></img>`,
  7: `<img src="./assets/7-ball.svg"></img>`,
  8: `<img src="./assets/8-ball.svg"></img>`,
  9: `<img src="./assets/9-ball.svg"></img>`,
  10: `<img src="./assets/10-ball.svg"></img>`,
  11: `<img src="./assets/11-ball.svg"></img>`,
  12: `<img src="./assets/12-ball.svg"></img>`,
  13: `<img src="./assets/13-ball.svg"></img>`,
  14: `<img src="./assets/14-ball.svg"></img>`,
  15: `<img src="./assets/15-ball.svg"></img>`,
};
//persist the name

$(document).ready(function () {
  // On page load, check if a value exists in localStorage
  let storedName = localStorage.getItem("name");
  //name not relevant only say welcome
  // If a value exists, set it to the input field
  // takes storedName and sets it to the input field
  // if (storedName) {
  //   $("#player-name").val(storedName);
  //   alert(`Welcome back, ${storedName}!`);
  // }
  //*****I want to make the app to say welcome regardless of the name  */
  // Save the value to localStorage when the input loses focus
  $("#player-name").blur(function () {
    let nameVal = $("#player-name").val();
    localStorage.setItem("name", nameVal);
  });
});

// showBalls function
// takes the value array and pushes the value to the scoredBalls array
//1. remove the ball from the initial ball (which contains all the pool balls )
//2. push the ball to the value array
function showBalls(value) {
  for (let j = 0; j < value.length; j++) {
    for (let i = 0; i < initialBalls.length; i++) {
      if (value[j] !== initialBalls[i]) {
        continue;
      } else {
        scoredBalls.push(Number(initialBalls[i]));
        initialBalls.splice(i, 1); // from index i remove 1 element

        svgBall.push(balls[value[j]]);
      }
    }
  }
}
// changes a number to svg
// it takes the number and returns the svg
function changeNumtoball(x) {
  let init = " ";
  if (balls[x]) {
    init = balls[x];
  }
  return init;
}

console.log(changeNumtoball(1)); //svg of 1
console.log(changeNumtoball(0));

//checkBall function checks if the point entered is present in the initial ball array returns a boolean true if the ball exitsts and false if it does not

function checkBall(point) {
  let boolInitial = false;
  for (let i = 0; i < initialBalls.length; i++) {
    if (Number(point) === initialBalls[i]) {
      boolInitial = true;
    }
  }
  return boolInitial;
}
//checkfoul function checks if the foul enterd is positive returns a boolean true if the foul is positive and false if it is not
function checkFoul(x) {
  let boolInitial = true;
  if (x < 0) {
    boolInitial = false;
  }
  return boolInitial;
}

//ballInrange function checks if the point entered is in the range 1-15 returns a boolean true if the point is in the range and false if it is not
function ballInrange(point) {
  let initial = false;
  if (point <= 15 && point >= 1) {
    initial = true;
  }
  return initial;
}
//sumOfarr function takes an array as an argument and returns the sum of the array
function sumOfarr(x) {
  let iValue = 0; //intial value
  for (i = 0; i < x.length; i++) {
    iValue = iValue + x[i];
  }
  return iValue;
}

const ptInput = $("#pt-input");

const flInput = $("#fl-input");

const totalArea = $("#total-area");

const submitBtn = $("#submit");

const scoreBallsList = $("#score-balls ul");

let points = [];
let foul = [];

submitBtn.click((event) => {
  event.preventDefault();

  console.log(checkBall(ptInput.val()));
  console.log(Number(ptInput.val()));

  //this section handles the points value

  let sumTemp = "";
  if (checkBall(ptInput.val())) {
    sumTemp = ptInput.val();
    // sumTemp = balls[Number(ptInput.val())];
  }

  const pointsList = $("#points-area ul");

  let sumPoint = sumOfarr(points);
  let sumFoul = sumOfarr(foul);
  const foulList = $("#foul-area ul");

  console.log(Boolean(ptInput.val()));
  if (!ptInput.val() && flInput.val() && checkFoul(flInput.val())) {
    //1. if the pt value is clear
    //2. if the fl value is not clear
    //3. if fl value is positive
    flVal = Number(flInput.val());
    foul.push(flVal);
    sumFoul = sumOfarr(foul);
    foulList.append(`<li>${sumFoul}</li>`);
    let totalVal = sumPoint - sumFoul;

    $("#total-area ul").append(`<li>${totalVal}</li>`);

    $("#pt-label").html(`<label class='pl-one'>Points:</label>`);
    $("#fl-label").html(`<label class = 'fl-two'>Foul:</label>`);
    flInput.val("");
    // 1. append the foul section
    // 2. clears the foul input section
    // 3. go back to the orignal points and fouls label
    // 4. doing the total and appending total value to the total section
  } else if (checkBall(ptInput.val()) && !flInput.val()) {
    //1. if the pt value is not clear
    //2. if ball is not in the iniital balls array
    //3. if the fl value is clear
    let val = Number(ptInput.val());
    points.push(val);
    sumPoint = sumOfarr(points);
    pointsList.append(`<li>${sumPoint}</li>`);
    let totalVal = sumPoint - sumFoul;
    $("#total-area ul").append(`<li>${totalVal}</li>`);
    $("#pt-label").html(`<label class='pl-one' >Points:</label>`);
    $("#fl-label").html(`<label class='fl-one'>Foul:</label>`);

    ptInput.val("");
    // 1. append the point section
    // 2. clears the point and foul input section
    // 3. doing the total and appending total value to the total section
    // 4. go back to the orignal points and fouls label
  } else if (
    checkBall(ptInput.val()) && // if the value is in the iniital balls array
    ballInrange(ptInput.val()) // if the value is in range 1-15
  ) {
    //1. if ball is in range
    //2. if ball is in iniital balls array

    let val = Number(ptInput.val());
    let flVal = Number(flInput.val());

    points.push(val);

    foul.push(flVal);

    sumPoint = sumOfarr(points);

    sumFoul = sumOfarr(foul);

    pointsList.append(`<li>${sumPoint}</li>`);

    foulList.append(`<li>${sumFoul}</li>`);

    let totalVal = sumPoint - sumFoul;

    $("#total-area ul").append(`<li>${totalVal}</li>`);

    $("#pt-label").html(`<label class='pl-one'>Points:</label>`);
    $("#fl-label").html(`<label class='fl-one'>Foul:</label>`);
    ptInput.val("");
    flInput.val("");
    // 1. append the foul section
    // 2. append the point section
    // 3. clears the point and foul input section
    // 4. doing the total and appending total value to the total section
    // 5. go back to the orignal points and fouls label
  } else if (!ptInput.val() && !flInput.val()) {
    //1. if the pt value is clear
    //2. if the fl value is clear
    $("#pt-label").html(
      `<label class="pl-one">Points:<span id = 'error' > enter a value </span></label>`
    );
    $("#fl-label").html(
      `<label class = 'fl-one'>Foul:<span id = 'error' > enter a value </span></label>`
    );
    //1. appends enter a value to the foul and point label section
  } else if (!ballInrange(ptInput.val())) {
    //1. if the pt value is not in range
    //2. if the pt value is clear and the foul section is not clear
    alert(
      "Points should be in the range of 1 to 15. and foul should be positve"
    );
    ptInput.val("");
    flInput.val("");
    $("#pt-label").html(`<label class='pl-one'>Points:</label>`);
    $("#fl-label").html(`<label class='fl-one'>Foul:</label>`);
    //1. alert message deployed
    //2. point and foul input section cleared
    //3. go back to the orignal points and fouls label
  } else if (!checkBall(ptInput.val()) && ballInrange(ptInput.val())) {
    //1. if ball is not in the iniital balls array
    //2. if ball is in range
    $("#pt-label").html(
      `<label class="pl-one">Points:<span id = 'error' >ball alredy scored </span></label>`
    );
    $("#fl-label").html(`<label class = 'fl-one'>Foul:</label>`);
    ptInput.val("");
    flInput.val("");

    //1. appends error message
    //2. clears the ptvalue section
    //3. go back to the orignal fouls label
  }

  // this section handles the scored balls section

  const scoBallsEl = $("#score-balls ul");
  if (sumTemp) {
    //1. if the point value is present and not clear
    value.push(Number(sumTemp));
    showBalls(value);

    let listItems = "";
    for (let i = 0; i < svgBall.length; i++) {
      listItems += `
      <li>
      ${svgBall[i]}
      </li>
  `;
    }
    console.log(listItems);
    scoBallsEl.html(listItems);
    //1. change the numbers inside the scored balls array
    //2. store it to another array to hold the svgs
    //3. display the svg in the scored balls array
  }
});
