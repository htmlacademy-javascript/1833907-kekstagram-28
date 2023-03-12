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

function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generatePhotoId = createIdGenerator();

const generateId = createIdGenerator();

const generateComment = () => ({
  id: generateId(),
  avatar: `img/avatar-${getRandomInteger(1,7)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const generateObject = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 201),
    comments: Array.from({length: getRandomInteger(1, 26)}, generateComment)
  };
};

const generateObjects = () => Array.from({length: 25}, generateObject);

generateObjects();
