import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from './10';

// let user: UserType


/*beforeEach(() => {
    user = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }
})*/

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 24
        }
    }

    const newUser = makeHairStyle(user, 2)
    // const newUser = makeHairStyle(user, 2)
    // user.address.title = 'Kiev'

    expect(user.hair).toBe(32)
    expect(newUser.hair).toBe(16)
    expect(newUser.address).toBe(user.address)
    // expect(newUser.address.title).toBe('Kiev')
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        }
    }

    const newUser = moveUser(user, 'Kiev')

    // expect(newUser.address).toBe(user.address)
    expect(newUser.address.title).toBe('Kiev')
    expect(newUser.laptop).toBe(user.laptop)
})

test('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        }
    }

    const newUser = upgradeUserLaptop(user, 'Asus')

    expect(newUser.laptop.title).toBe('Asus')
    expect(newUser.address).toBe(user.address)

})