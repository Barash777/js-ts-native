export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: HouseAddressType
}
export type HouseAddressType = {
    number: number
    street: HouseAddressStreetType
}
export type HouseAddressStreetType = {
    title: string
}


export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: HouseAddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildingsType>,
    citizensNumber: number
}

