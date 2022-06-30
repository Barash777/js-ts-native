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

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        // address: {...u.address, title},
        laptop: {...u.laptop, title}
    }
}

/*
function increaseAge(user: UserType) {
    user.age++;
}
*/
