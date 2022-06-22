import {UserType} from './09';

let user: UserType

function increaseAge(u: UserType) {
    u.age++;
}

beforeEach(() => {
    user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
})

test('reference type test', () => {
    increaseAge(user);

    expect(user.age).toBe(33)

    // const superman = {...user}
    const superman = user
    superman.age = 1000

    expect(superman.age).toBe(1000)
})

test('array reference test', () => {
    let users = [
        {name: 'A', age: 12},
        {name: 'B', age: 16},
    ]

    let admins = users
    admins.push({name: 'C', age: 56})

    expect(admins.length).toBe(3)
    expect(users.length).toBe(3)
})


test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount = 111

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(111)
})


test('reference type test 2', () => {
    let addr = {
        title: 'Minsk'
    }

    user.address = addr

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addr
    }

    user2.address.title = 'Vologda'
    expect(user.address.title).toBe('Vologda')
    expect(user2.address.title).toBe('Vologda')
    expect(user.address).toBe(user2.address)

})


test('array reference test 2', () => {
    let addr = {
        title: 'Minsk'
    }

    const user1: UserType = {
        name: 'Ilya',
        age: 25,
        address: addr
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addr
    }

    const users = [user1, user2, {name: 'Vova', age: 18, address: addr}]
    const admins = [user1, user2]

    admins[0].name = 'Dmitry'

    expect(users.length).toBe(3)
    expect(users[0].name).toBe('Dmitry')
    expect(admins[0].name).toBe('Dmitry')
    expect(user1.name).toBe('Dmitry')
})


test('sort array test', () => {
    const letters = ['a', 'b', 'd', 'e', 'z', 'y', 'o']
    // letters.sort()
    arSort(letters)

    expect(letters).toEqual(['a', 'b', 'd', 'e', 'o', 'y', 'z'])
})

function arSort(letters: Array<string>) {
    letters.sort()
    // must be so
    // const newLetters = [...letters].sort()
}