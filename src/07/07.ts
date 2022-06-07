export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dima Sidorov', age: 18}
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
        age: man.age
    }
}

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
        age: 33
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alex',
        lastName: 'Petrov',
        age: 24
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dima',
        lastName: 'Sidorov',
        age: 18
    },
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const devs2 = [d1, d2, d3]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
    age: man.age
}))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// devs1 === dev2 === devs3 === devs4
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

export const createGreetingMessages = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
}
