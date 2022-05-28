type HouseType = {
    buildedAt: number
    repaired: boolean
    address: HouseAddressType
}
type HouseAddressType = {
    number: number
    street: HouseAddressStreetType
}
type HouseAddressStreetType = {
    title: string
}


type GovernmentBuildingsType = {
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

