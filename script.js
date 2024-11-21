const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertDecimalToRoman = () => {
  let roman = [];
  const decimalArray = numberInput.value.split("");

  while (decimalArray[0] === '0') {
    decimalArray.shift();
  }

  if (decimalArray.length === 1) {
    convertDigits(decimalArray[0], roman);
  } else if (decimalArray.length === 2) {
    convertDozens(decimalArray[0], roman);
    convertDigits(decimalArray[1], roman);
  } else if (decimalArray.length === 3) {
    convertHundreds(decimalArray[0], roman);
    convertDozens(decimalArray[1], roman);
    convertDigits(decimalArray[2], roman);
  } else {
    convertThousands(decimalArray[0], roman);
    convertHundreds(decimalArray[1], roman);
    convertDozens(decimalArray[2], roman);
    convertDigits(decimalArray[3], roman);
  }

  output.innerText = roman.join('');
};

const checkUserInput = () => {
  if (numberInput.value === "") {
    output.innerText = "Please enter a valid number";
    return null;
  } else if (parseInt(numberInput.value) < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return null;
  } else if (parseInt(numberInput.value) > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return null;
  } else {
    convertDecimalToRoman()
  }
};

const convertDigits = (input, arr) => {
  switch (input) {
    case '1':
      arr.push('I');
      break;
    case '2':
      arr.push('II');
      break;
    case '3':
      arr.push('III');
      break;
    case '4':
      arr.push('IV');
      break;
    case '5':
      arr.push('V');
      break;
    case '6':
      arr.push('VI');
      break;
    case '7':
      arr.push('VII');
      break;
    case '8':
      arr.push('VIII');
      break;
    case '9':
      arr.push('IX');
      break;
  }
};

const convertDozens = (input, arr) => {
  switch (input) {
    case '1':
      arr.push('X');
      break;
    case '2':
      arr.push('XX');
      break;
    case '3':
      arr.push('XXX');
      break;
    case '4':
      arr.push('XL');
      break;
    case '5':
      arr.push('L');
      break;
    case '6':
      arr.push('LX');
      break;
    case '7':
      arr.push('LXX');
      break;
    case '8':
      arr.push('LXXX');
      break;
    case '9':
      arr.push('XC');
      break;
  }
};

const convertHundreds = (input, arr) => {
  switch (input) {
    case '1':
      arr.push('C');
      break;
    case '2':
      arr.push('CC');
      break;
    case '3':
      arr.push('CCC');
      break;
    case '4':
      arr.push('CD');
      break;
    case '5':
      arr.push('D');
      break;
    case '6':
      arr.push('DC');
      break;
    case '7':
      arr.push('DCC');
      break;
    case '8':
      arr.push('DCCC');
      break;
    case '9':
      arr.push('CM');
      break;
  }
}

const convertThousands = (input, arr) => {
  switch (input) {
    case '1':
      arr.push('M');
      break;
    case '2':
      arr.push('MM');
      break;
    case '3':
      arr.push('MMM');
      break;
  }
}

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

convertBtn.addEventListener("click", checkUserInput);