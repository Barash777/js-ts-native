import {CityType, GovernmentBuildingsType} from '../02/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const demolishHousesOnTheStreet2 = (city: CityType, street: string) => {
    return city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThan = (buildings: Array<GovernmentBuildingsType>, count: number) => {
    return buildings.filter(b => b.staffCount > count)
}
