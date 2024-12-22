const question = document.querySelector(".question");
const numpad = document.querySelectorAll(".btn");
const showRes = document.querySelector(".result");

const inputs = [];
let opa = "";
let temp = "";
let result = 0;
const forbiddenCharacters = /[\/%*\-+=]/;

const getResult = () => {
  try {
    let expression = inputs.join("");

    if (!/^[0-9+\-*/\s()]+$/.test(expression)) {
      throw new Error("Invalid characters in expression");
    }
   

    result = eval(expression);
    showRes.innerHTML = result;
    inputs.length = 0
    inputs.push(0)
    return;
  } catch (error) {
    console.error("Error evaluating expression:", error.message);
    showRes.innerHTML = result;
    return null;
  } 
};

numpad.forEach((element) => {

  element.addEventListener("click", (e) => {
    let currValue = e.target.innerText;
    
    if (currValue == "=") {
      getResult();
    } else if (currValue == "AC") {
      inputs.length = 0;
    } else if (currValue == "DEL") {
      inputs.pop();
    } else {
      inputs.push(currValue);
    }
    let shoing = inputs.join("");
    question.innerHTML = shoing;
  });
});
