const fetch = require("node-fetch");

const getCountry = (countryCode) => {
    return fetch('https://restcountries.com/v3.1/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country')
        }
    }).then((data) => {
        return data.find((country) => country.cca2 === countryCode)
    }).then((countryName) => {
        if (countryName) {
            console.log(countryName.name.official)
        } else {
            throw new Error(`Country ${countryCode} not found`)
        }
    }).catch((err) => {
        console.log(`Error message: ${err}`)
    })
}

getCountry('UA')