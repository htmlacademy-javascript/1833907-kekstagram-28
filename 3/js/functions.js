const isLessEqual = (string, maxStringLength) => string.length <= maxStringLength;

isLessEqual('проверяемая строка', 10);


const isPolindrom = (string) => {
  const formatedString = string
    .replaceAll(' ', '')
    .toLowerCase();
  for (let i = 0; i < formatedString.length / 2; i++) {
    if (formatedString.at(i) !== formatedString.at (-i - 1)){
      return false;
    }
  }
  return true;
};

isPolindrom('Лёша на полке клопа нашёл ');


const getNumber = (param) => {
  const string = String(param);
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

getNumber('1 кефир, 0.5 батона');


const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0 ? string : pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('qwerty', 4, '0');
