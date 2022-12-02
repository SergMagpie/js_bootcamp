

const listPressedKeys = function () {
    return pressedKeys.join(', ')
}

const showSecretWord = function () {
    const showedSumbols = []
    secretWord.split('').forEach(element => {
        if (pressedKeys.includes(element.toLowerCase())) {
            showedSumbols.push(element)
        } else if (element === ' ') {
            showedSumbols.push(' ')
        } else {
            showedSumbols.push('*')
        }
    });
    return showedSumbols.join('')
}

const writeScreen = function () {
    document.querySelector('body').replaceChildren()

    const screenTitle = document.createElement('h2')
    screenTitle.textContent = title
    document.querySelector('body').appendChild(screenTitle)

    const pressedKeysRow = document.createElement('p')
    pressedKeysRow.textContent = listPressedKeys()
    document.querySelector('body').appendChild(pressedKeysRow)

    const secretWordRow = document.createElement('h2')
    secretWordRow.textContent = showSecretWord()
    document.querySelector('body').appendChild(secretWordRow)
}

const addPressedKey = function (key) {
    if (!pressedKeys.includes(key.toLowerCase())) {
        pressedKeys.push(key.toLowerCase())
        writeScreen()
    }
}
