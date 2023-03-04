const checkStringLength = (string, maxString) => string.length <= maxString;

checkStringLength('проверяемая строка', 10);


const isPolindrom = (string) => {
  const stringLow = string
    .toLowerCase()
    .replaceAll(' ', '');
  for (let i = 0; i < stringLow.length; i++) {
    if (stringLow.at(i) !== stringLow.at (-i - 1)){
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
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

getNumber('1 кефир, 0.5 батона');


const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0 ? string : pad.slice (0, actualPad % pad.length) + pad.repeat (actualPad / pad.length) + string;
};

myPadStart('qwerty', 4, '0');
