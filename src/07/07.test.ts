// import {createGreetingMessages, ManType} from './05';

// let people: Array<ManType> = []

// let people, man;

// let man = {}


import {ManType} from './Man';

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Andrew',
        age: 33,
        lessons: [
            {title: '1'},
            {title: '2'},
            {title: '3'},
        ],
        address: {
            street: {
                title: 'Nigde'
            }
        }
    }
})


test('check age', () => {

    // const age = props.age;
    // const lessons = props.lessons;
    // const title = props.address.street.title;
    // const {title} = props.address.street

    // the same as above
    const {age, lessons, address: {street: {title}}} = props;

    expect(age).toBe(33);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Nigde');


})


test('check again', () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(restLessons[0].title).toBe('2')
    expect(restLessons[1].title).toBe('3')
    expect(restLessons[1]).toStrictEqual({title: '3'})
})


