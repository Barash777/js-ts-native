import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToAnotherHouse,
    removeBook,
    updateBookToUser,
    updateCompany,
    updateCompanyTitleForAssAr,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithCompaniesType,
    UserWithLaptopType
} from './10';

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


test('move uset to the new house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        },
        books: ['js', 'red hat', 'lord of the rings']
    }

    const newUser = moveUserToAnotherHouse(user, 1)

    expect(newUser.address.house).toBe(1)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).not.toBe(user.address)
    // expect(newUser).toBe(user.address)
})

test('add new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        },
        books: ['js', 'red hat', 'lord of the rings']
    }

    const newUser = addNewBooksToUser(user, ['War and Peace', 'XXX'])

    expect(user.books.length).toBe(3)
    expect(newUser.books.length).toBe(5)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books).not.toBe(user.books)
    // expect(newUser).toBe(user.address)
})

test('add books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        },
        books: ['js', 'red hat', 'lord of the rings']
    }

    const newUser = updateBookToUser(user, 'red hat', 'XXX')

    expect(user.books.length).toBe(3)
    expect(user.books[1]).toBe('red hat')
    expect(newUser.books.length).toBe(3)
    expect(newUser.books[1]).toBe('XXX')
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books).not.toBe(user.books)
    // expect(newUser).toBe(user.address)
})

test('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        },
        books: ['js', 'red hat', 'lord of the rings']
    }

    const newUser = removeBook(user, 'red hat')

    expect(user.books.length).toBe(3)
    expect(user.books[1]).toBe('red hat')
    expect(newUser.books.length).toBe(2)
    expect(newUser.books[0]).toBe('js')
    expect(newUser.books[1]).toBe('lord of the rings')
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books).not.toBe(user.books)
    // expect(newUser).toBe(user.address)
})

test('change company', () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 19
        },
        laptop: {
            title: 'Mac'
        },
        books: ['js', 'red hat', 'lord of the rings'],
        companies: [
            {id: 1, title: 'Garage'},
            {id: 2, title: 'EPAM'},
            {id: 3, title: 'Google'},
        ]
    }

    const newUser = updateCompany(user, 1, 'freelance')// as UserWithLaptopType & UserWithBooksType & UserWithCompaniesType

    expect(user.companies.length).toBe(3)
    expect(user.companies[0].title).toBe('Garage')
    expect(newUser.companies.length).toBe(3)
    expect(newUser.companies[0].title).toBe('freelance')
    expect(newUser.address).toBe(user.address)
    expect(newUser.companies).not.toBe(user.companies)
})

test('update companies', () => {
    let companies = {
        'Dimych': [
            {id: 1, title: 'Garage'},
            {id: 2, title: 'EPAM'},
            {id: 3, title: 'Google'},
        ],
        'Artem': [
            {id: 1, title: 'Intel'},
            {id: 2, title: 'freelance'},
        ]
    }

    // let companyCopy = {...companies}


    let copy = updateCompanyTitleForAssAr(companies, 'Dimych', 1, 'freelance')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('freelance')
})