// heart section
let count =0
const copyNumber = document.getElementById("copy-number")
const buttons = document.getElementsByClassName("heart-btn")
for(const button of buttons){
    button.addEventListener("click", function(){
        count++;
        copyNumber.innerText = count;
    })
}

//copy section 

let count2 = 0;
const copyNumber2 = document.getElementById("copy-number-2");
const buttons2 = document.getElementsByClassName("btn-copy");
const numbers2 = document.getElementsByClassName("help-line-numbers");

let index = 0;
for (const button of buttons2) {
  const numberElement = numbers2[index]; 

  button.addEventListener("click", function () {
    count2++;

    const number = numberElement.innerText;

    navigator.clipboard.writeText(number).then(() => {
      alert("Number has been copied: " + number);
    });

    copyNumber2.innerText = count2;
  });

  index++; // move to next
}

// call section

// let count3 = 100; // starting coins
// const copyNumber3 = document.getElementById("copy-number-3");
// const buttons3 = document.getElementsByClassName("btn-call");
// const numbers3 = document.getElementsByClassName("help-line-numbers");
// const title2 = document.getElementsByClassName("title-2");

// let index2 = 0;
// for (const button of buttons3) {
//   const numberElement1 = numbers3[index2]; 
//   const titleElements2 = title2[index2];

//   button.addEventListener("click", function () {
//     if (count3 <= 0) {
//       alert("You have insufficient coins to call.");
//       return; // stop execution if no coins left
//     }

//     count3 -= 20; // reduce by 20

//     if (count3 < 0) count3 = 0; // prevent negative

//     const number2 = numberElement1.innerText;
//     const titleA2 = titleElements2.innerText;

//     alert("Calling " + titleA2 + " " + number2);

//     copyNumber3.innerText = count3;
//   });

//   index2++; // move to next
// }

let count3 = 100; // starting coins
const copyNumber3 = document.getElementById("copy-number-3");
const buttons3 = document.getElementsByClassName("btn-call");
const numbers3 = document.getElementsByClassName("help-line-numbers");
const title2 = document.getElementsByClassName("title-2");

const historySection = document.getElementById("history-section");
const clearBtn = document.getElementById("clear-history");

let index2 = 0;
for (const button of buttons3) {
  const numberElement1 = numbers3[index2]; 
  const titleElements2 = title2[index2];

  button.addEventListener("click", function () {
    if (count3 <= 0) {
      alert("You have insufficient coins to call.");
      return; // stop execution if no coins left
    }

    count3 -= 20; // reduce by 20
    if (count3 < 0) count3 = 0; // prevent negative

    const number2 = numberElement1.innerText;
    const titleA2 = titleElements2.innerText;
    const timeNow = new Date().toLocaleTimeString();

    alert("Calling " + titleA2 + " " + number2);

    copyNumber3.innerText = count3;

    // create history entry
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-2";
    historyItem.innerHTML = `
      <div>
        <h3 class="text-black font-semibold text-[18px]">${titleA2}</h3>
        <p class="text-gray-600 text-s">${number2}</p>
      </div>
      <span class="text-gray-600 text-s">${timeNow}</span>
    `;

    // add latest on top
    historySection.prepend(historyItem);
  });

  index2++; // move to next
}

// clear history button
clearBtn.addEventListener("click", () => {
  historySection.innerHTML = "";
});
