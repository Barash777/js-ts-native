// import {ages} from './04';

test('should take old men with age > 90', () => {
    const ages = [12, 13, 18, 23, 27, 18, 27, 101, 97, 14];
    const predicate = (age: number) => age > 90

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(101);
    expect(oldAges[1]).toBe(97);

    const oldAges2 = ages.filter(predicate);

    expect(oldAges2.length).toBe(2);
    expect(oldAges2[0]).toBe(101);
    expect(oldAges2[1]).toBe(97);
})


test('should take cheap courses < 160', () => {
    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 350},
        {title: 'html', price: 20}
    ]

// < 160
    type CourseType = {
        title: string,
        price: number
    }

    const cheapPredicate = (course: CourseType) => course.price < 160

    /*const cheapCourses = [
        {title: 'css', price: 100},
        {title: 'html', price: 20}
    ] // < 160*/


    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('css');
    expect(cheapCourses[0].price).toBe(100);
    expect(cheapCourses[1].title).toBe('html');
    expect(cheapCourses[1].price).toBe(20);

    // const cheapCourses2 = courses.filter(cheapPredicate)
    const cheapCourses2 = courses.filter(course => course.price < 160)

    expect(cheapCourses2.length).toBe(2);
    expect(cheapCourses2[0].title).toBe('css');
    expect(cheapCourses2[0].price).toBe(100);
    expect(cheapCourses2[1].title).toBe('html');
    expect(cheapCourses2[1].price).toBe(20);
})


test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'a', isDone: false},
        {id: 2, title: 'b', isDone: true},
        {id: 3, title: 'c', isDone: false},
        {id: 4, title: 'd', isDone: true},
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('b');
    expect(completedTasks[1].title).toBe('d');

})

test('get only UNcompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'a', isDone: false},
        {id: 2, title: 'b', isDone: true},
        {id: 3, title: 'c', isDone: false},
        {id: 4, title: 'd', isDone: true},
    ]

    const uncompletedTasks = tasks.filter(t => !t.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe('a');
    expect(uncompletedTasks[1].title).toBe('c');

})