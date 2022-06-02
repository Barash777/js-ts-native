const city = {
    title: 'New York',
    houses: [
        {
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
        {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        },
        {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        },
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
                number: 100,
                street: {
                    title: 'Central Str'
                }
            }
        },
        {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            address: {
                number: 100,
                street: {
                    title: 'South Str'
                }
            }
        }
    ],
    citizensNumber: 1000000
}

const fn1 = (city, street) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

const fn2 = (city, street) => {
    return city.houses.filter(h => h.address.street.title !== street)
}


console.log(fn1(city, 'Happy street'), city)
console.log(fn2(city, 'Happy street'))