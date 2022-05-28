import {student, StudentType} from '../02/02';
import {CityType, GovernmentBuildingsType, HouseType} from '../02/02_02';

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function setStudentActive(student: StudentType) {
    student.isActive = true
}

export function doesStudentLivesInCity(student: StudentType, city: string) {
    return student.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, value: number) => {
    building.budget += value;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, value: number) {
    building.staffCount -= value
}

export const toHireStaff = (building: GovernmentBuildingsType, value: number) => {
    building.staffCount += value
}

export function getGreetingMessageForTheCity(city: CityType) {
    //return 'Hello ' + city.title + ' citizens, all ' + city.citizensNumber + ' men!'
    return `Hello ${city.title} citizens, all ${city.citizensNumber} men!`
}