let reastaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    check: function (count) {
        if (count > this.guestCapacity - this.guestCount) {
            return false
        } else {
            return true
        }
    }
}

let check = reastaurant.check(76)

console.log(check)