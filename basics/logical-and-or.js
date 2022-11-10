let isAccountActive = false
// This condition will pass if isAccountActive is false
if (!isAccountActive) {
 console.log('Account is locked')
}

let temp = 170
if (temp >= 70 && temp <= 90) {
 console.log('Get outside!')
} else {
 console.log('Stay inside')
}

let isGuestOneVegan = true
let isGuestTwoVegan = true
if (isGuestOneVegan && isGuestTwoVegan) {
 console.log('Only offer up vegan food.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
 console.log('Make sure to offer up some vegan food.')
} else {
 console.log('Offer up anything on the menu.')
}