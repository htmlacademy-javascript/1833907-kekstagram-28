


const picturesTemplate = document.querySelector('#picture').content;
const picturesListItem = picturesTemplate.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();
const photoListElement = document.querySelector('.pictures');

function generatePictures(Objects) {
  Objects.map(createMini);
  photoListElement.appendChild(photoListFragment);
}

function createMini({url, likes, comments}){
  const picture = picturesListItem.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  photoListFragment.appendChild(picture);
}


export {generatePictures};
