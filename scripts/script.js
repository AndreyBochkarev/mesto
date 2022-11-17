const popup = document.querySelector('.popup'),
    popupEdit = document.querySelector('.profile__edit'),
    popupName = document.querySelector('.popup__input_type_name'),
    popupProfession = document.querySelector('.popup__input_type_profession'),
    popupSubmit = document.querySelector('.popup__submit'),
    popupClose = document.querySelector('.popup__closed');

const popupCredit = document.querySelector('.profile__name'),
    popupJob = document.querySelector('.profile__profession');

function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = popupCredit.textContent;
    popupProfession.value = popupJob.textContent;
};

function closePopup() {
    popup.classList.remove('popup_opened');
};

let popupForm = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
    evt.preventDefault();
    popupCredit.textContent = popupName.value;
    popupJob.textContent = popupProfession.value;
    closePopup();
};

popupForm.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', closePopup);
popupEdit.addEventListener('click', openPopup);