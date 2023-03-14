import{getRandomInteger, getRandomArrayElement, generatePhotoId, generateCommentId} from './util.js';

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 25;
const OBJECT_COUNT = 25;

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


const generateMessage = () => Math.random() > 0.5 ? getRandomArrayElement(MESSAGES) : `${getRandomArrayElement(MESSAGES) } ${ getRandomArrayElement(MESSAGES)}`;


const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: generateMessage(),
  name: getRandomArrayElement(NAMES)
});


const generateObject = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, generateComment)
  };
};

const generateObjects = () => Array.from({length: OBJECT_COUNT}, generateObject);

export {generateObjects};


