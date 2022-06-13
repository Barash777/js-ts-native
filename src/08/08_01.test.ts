import {usersObj} from './08_01';

export type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Siarhei'},
        '12': {id: 12, name: 'Anna'},
        '106': {id: 106, name: 'Elena'},
        '94': {id: 94, name: 'Eric'},
    }
})

test('select users from obj', () => {
    // expect(usersObj['length']).toBe(4)

    expect(usersObj[0]).toBe('Siarhei')
    expect(usersObj[1]).toBe('Anna')
    expect(usersObj[2]).toBe('Elena')
    expect(usersObj[3]).toBe('Eric')
    // expect(usersObj[1]).toBe('Eric')
})

test('should update user', () => {

    expect(users['12'].name).toBe('Anna')

    users['12'].name = 'Katya'

    expect(users['12'].name).toBe('Katya')
    expect(users['12']).toEqual({id: 12, name: 'Katya'})

})

test('should delete user', () => {

    expect(users['12'].name).toBe('Anna')

    delete users['12']

    expect(users['12']).toBeUndefined()

})