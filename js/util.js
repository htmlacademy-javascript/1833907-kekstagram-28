// функция для генерации рандомного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция для генерации рандомного элмента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// генерирует рандомное id
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

// генерирует id фотографии и id комментария
const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();


export {getRandomInteger, getRandomArrayElement, generatePhotoId, generateCommentId};

