const title = 'The Game Hangman'

const secretWord = 'Cat Dog'

const amountTry = 5

const pressedKeys = []

writeScreen()

document.querySelector('body').addEventListener("keypress", function (e) {
    addPressedKey(e.key)
})