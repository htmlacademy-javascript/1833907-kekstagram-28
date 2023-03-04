const checkStringLength = (string, maxString) => string.length <= maxString;


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


const getNumber= (string) => {
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
}


const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0 ? string : pad.slice (0, actualPad % pad.length) + pad.repeat (actualPad / pad.length) + string;
}


