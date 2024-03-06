const text = document.querySelector('.js-text')
const characters = document.querySelector('.js-characters')

text.addEventListener('input', () => {
    characters.textContent = text.value.length;
})