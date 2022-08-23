const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body = document.body;

const buttonChange = document.querySelector('.header__button-change');
const buttonBg = document.querySelector('.header__button-change_image');

// Сменить цвет кнопок в header при смене пола

//Менять цвет иконок в footer подробности в видео


const state = {
    gender: body.classList.contains('women') ? 'women' : 'men',
};

const changeToMen = () => {
    if (state.gender !== 'men') {
        body.classList.add('men');
        body.classList.remove('women');
        state.gender = 'men';
    }
};

const changeToWomen = () => {
    if (state.gender != 'women') {
        body.classList.add('women');
        body.classList.remove('men');
        state.gender = 'women';
    }
};
const changeToBlue = () => {
    buttonChange.classList.add('_blue');
    buttonBg.classList.add('_blue');
};
const changeToPink = () => {
    buttonChange.classList.remove('_blue');
    buttonBg.classList.remove('_blue');
};

buttonMen.addEventListener('click', changeToMen);
buttonMen.addEventListener('click', changeToBlue);
buttonWomen.addEventListener('click', changeToWomen);
buttonWomen.addEventListener('click', changeToPink);

