$(document).ready(function() {
  const calc = (firstVal, ops, secVal) => {
    let answer = 0;
    if (ops.length === 0) {
      answer = firstVal + secVal;
    } else if (ops === "+") {
      answer = firstVal + secVal;
    } else if (ops === "-") {
      answer = firstVal - secVal;
    } else if (ops === "x") {
      answer = firstVal * secVal;
    } else {
      answer = firstVal / secVal;
    }
    return answer;
  };
  const operation = (val) => {
    let valArray = [];
    for (let i = 0; i < val.length; i++) {
      valArray.push(val[i]);
    }
    let newArray = [];
    let optStrings = "";
    let result = 0;
    let newResult = 0;
    let operator = "";
    let actionOperator = "";
    let functionResult = 0;
    valArray.map((key) => {
      if (key === "+" && newArray) {
        operator = "+";
        newArray.map((key) => {
          optStrings += key;
        });
        let optIntegers = parseFloat(optStrings);
        newResult += optIntegers;
        functionResult = calc(result, actionOperator, newResult);
        result = functionResult;
        console.log(result);
        newArray = [];
        optStrings = "";
        newResult = 0;
        actionOperator = operator;
      } else if (key === "-" && newArray) {
        operator = "-";
        newArray.map((key) => {
          optStrings += key;
        });
        let optIntegers = parseFloat(optStrings);
        newResult += optIntegers;
        functionResult = calc(result, actionOperator, newResult);
        result = functionResult;
        console.log(result);
        newArray = [];
        optStrings = "";
        newResult = 0;
        actionOperator = operator;
      } else if (key === "x" && newArray) {
        operator = "x";
        newArray.map((key) => {
          optStrings += key;
        });
        let optIntegers = parseFloat(optStrings);
        // Check if newResult = 0 in against the value of actionOperator
        newResult = actionOperator !== "" && newResult === 0 ? 1 : 0;
        newResult =
          actionOperator === "" ? optIntegers : newResult * optIntegers;
        functionResult = calc(result, actionOperator, newResult);
        result = functionResult;
        console.log(result);
        newArray = [];
        optStrings = "";
        newResult = 0;
        actionOperator = operator;
      } else if (key === "/" && newArray) {
        operator = "/";
        newArray.map((key) => {
          optStrings += key;
        });
        let optIntegers = parseFloat(optStrings);
        // newResult = actionOperator !== "" && newResult === 0 ? 1 : 0;
        newResult =
          actionOperator === ""
            ? optIntegers
            : actionOperator !== "" && newResult === 0
            ? optIntegers
            : newResult % optIntegers;
        functionResult = calc(result, actionOperator, newResult);
        result = functionResult;
        console.log(result);
        newArray = [];
        optStrings = "";
        newResult = 0;
        actionOperator = operator;
      } else {
        newArray.push(key);
      }
    });
    if (operator === "+") {
      newArray.map((key) => {
        optStrings += key;
      });
      let optIntegers = parseFloat(optStrings);
      result += optIntegers;
      console.log(result);
    } else if (operator === "-") {
      newArray.map((key) => {
        optStrings += key;
      });
      let optIntegers = parseFloat(optStrings);
      result -= optIntegers;
      console.log(result);
    } else if (operator === "x") {
      newArray.map((key) => {
        optStrings += key;
      });
      let optIntegers = parseFloat(optStrings);
      result *= optIntegers;
      console.log(result);
    } else if (operator === "/") {
      newArray.map((key) => {
        optStrings += key;
      });
      let optIntegers = parseFloat(optStrings);
      result /= optIntegers;
      console.log(result);
    }
    return result;
  };

  let show = "";
  let valArry = [];
  $("li").click(function() {
    let val = $(this).attr("value");
    if (val === "AC" && valArry) {
      valArry.pop();
      valArry.map((key) => {
        show += key;
      });
      $("input").val(show);
      show = "";
    } else if (val === "C" && valArry) {
      valArry = [];
      $("input").val("");
      $(".aDisplay").html(0);
      $(".qDisplay").html("&emsp;");
    } else {
      let inputs = $("input");
      if(inputs.val()){
        for(let i = 0; i < inputs.val().length; i++){
          valArry.push(inputs.val()[i]);
        }
      }
      valArry.push(val);
      valArry.map((key) => {
        show += key;
      });
      console.log(show);
      $("input").val(show);
      show = "";
      valArry=[];
    }
  });
  $("button").click(function() {
    $(".qDisplay").html($("input").val());
    let aDisplay = operation($("input").val());
    $(".aDisplay").html(aDisplay);
    $("input").val("");
    show = "";
    valArry = [];
  });
});
