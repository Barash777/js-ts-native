import {isArray} from 'util';

export const usersArray2 = ['Siarhei', 'Anna', 'Elena', 'Eric']


export const usersObj = {
    '0': 'Siarhei',
    '1': 'Anna',
    '2': 'Elena',
    '3': 'Eric'
}

export type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Siarhei'},
    '12': {id: 12, name: 'Anna'},
    '106': {id: 106, name: 'Elena'},
    '94': {id: 94, name: 'Eric'},
}

// users[101] =

let user = {id: 10501, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
// users[user.id].name = 'Alesha'


export const usersArray = [
    {id: 101, name: 'Siarhei'},
    {id: 12, name: 'Anna'},
    {id: 106, name: 'Elena'},
    {id: 94, name: 'Eric'}
]

// usersArray.find(u => u.id === 1)

// usersArray.push(user)
// let usersCopy = [...usersArray, user]
// let usersArray = usersArray.filter(u => u.id !== user.id )