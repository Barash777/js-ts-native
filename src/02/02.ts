export type TechnologiesType = {
    id: number
    title: string
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}


export const student: StudentType = {
    id: 1,
    name: 'Eric',
    age: 4,
    isActive: false,
    address: {
        streetTitle: 'Marksa',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        },
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
        {
            id: 4,
            title: 'React'
        }
    ]
}

// console.log(student.age);
// console.log(student.isActive);
// console.log(student.address.city.title);
// console.log(student.technologies[0].title);