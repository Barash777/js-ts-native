import {createGreetingMessages, ManType} from './05';

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Dima Sidorov', age: 18}
    ];
})


test('check welcome messages', () => {

    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew. Welcome to IT-Incubator');
    expect(messages[1]).toBe('Hello Alex. Welcome to IT-Incubator');
    expect(messages[2]).toBe('Hello Dima. Welcome to IT-Incubator');

})