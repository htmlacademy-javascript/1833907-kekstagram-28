const MIN_SENTENCES = 1;
const MAX_SENTENCES = 2;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_LIKES_ID = 15;
const MAX_LIKES_ID = 200;
const MIN_COMMENTS_ID = 1;
const MAX_COMMENTS_ID = 25;

const DESCRIPTION = [
  `Октябрь уж наступил — уж роща отряхает
  Последние листы с нагих своих ветвей;
  Дохнул осенний хлад — дорога промерзает.`,

  `Журча еще бежит за мельницу ручей,
  Но пруд уже застыл; сосед мой поспешает
  В отъезжие поля с охотою своей,`,

  `Тот, кто любит цветы,
  Тот, естественно, пулям не нравится.
  Пули — леди ревнивые.`,

  `Стоит ли ждать доброты?
  Девятнадцатилетняя Аллисон Краузе,
  Ты убита за то, что любила цветы.`,

  `Духовной жаждою томим,
  В пустыне мрачной я влачился, —
  И шестикрылый серафим
  На перепутье мне явился.`
];

const NAMES = [
  'Alex',
  'Fedor',
  'Sasha',
  'Sveta',
  'Lidiya'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};


const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();


const countOfComments = () => {
  let message = '';
  if (getRandomInteger (MIN_SENTENCES, MAX_SENTENCES) === 1){
    message = getRandomArrayElement(MESSAGES);
  } else {
    message = `${getRandomArrayElement(MESSAGES) } ${ getRandomArrayElement(MESSAGES)}`;
  }
  return message;
};


const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: countOfComments(),
  name: getRandomArrayElement(NAMES)
});

const generateObject = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(MIN_LIKES_ID, MAX_LIKES_ID),
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS_ID, MAX_COMMENTS_ID)}, generateComment)
  };
};

const generateObjects = () => Array.from({length: 25}, generateObject);

generateObjects();


