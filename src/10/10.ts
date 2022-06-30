let user = {
    name: 'Dimych',
    hair: 32
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export type CompanyType = {
    id: number
    title: string
}


export type UserType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
    // laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    // copy.hair = copy.hair / power
    // u.hair = u.hair / power

    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        address: {...u.address, title},
        // laptop: {...u.laptop}
    }
}

export function moveUserToAnotherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house},
        // laptop: {...u.laptop}
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        // address: {...u.address, title},
        laptop: {...u.laptop, title}
    }
}


export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        // address: {...u.address, house},
        // laptop: {...u.laptop}
        books: [...u.books, ...newBooks]
    }
}

export function updateBookToUser(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        // address: {...u.address, house},
        // laptop: {...u.laptop},
        // books: [...u.books].map(e => e === oldBook ? newBook : e),
        books: u.books.map(b => b === oldBook ? newBook : b) // better solution
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        // address: {...u.address, house},
        // laptop: {...u.laptop},
        books: u.books.filter(b => b !== book)
    }
}

export function updateCompany(u: UserWithCompaniesType, id: number, title: string) {
    return {
        ...u,
        // address: {...u.address, house},
        // laptop: {...u.laptop},
        // books: [...u.books].map(e => e === oldBook ? newBook : e),
        companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }
}

export function updateCompanyTitleForAssAr(companies: { [key: string]: Array<CompanyType> },
                                           userName: string,
                                           id: number,
                                           title: string) {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === id
        ? {...c, title}
        : c)

    return companyCopy
}