// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(data, onDelete) {
  const cardElement = cardTemplate.cloneNode(true).querySelector(".card");

  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement.querySelector(".card__image").alt = data.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => onDelete(cardElement));

  return cardElement;
}

function onDelete(item) {
  item.remove();
}

initialCards.forEach((item) => {
  const card = createCard(item, onDelete);
  placesList.append(card);
});
