const checkStringLength = (string, maxStringLength) => string.length <= maxStringLength;

checkStringLength('проверяемая строка', 10);


const isPolindrom = (string) => {
  const stringFormator = string
    .toLowerCase()
    .replaceAll(' ', '');
  for (let i = 0; i < stringFormator.length; i++) {
    if (stringFormator.at(i) !== stringFormator.at (-i - 1)){
      return false;
    }
  }
  return true;
};

isPolindrom('Лёша на полке клопа нашёл ');


const getNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
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
