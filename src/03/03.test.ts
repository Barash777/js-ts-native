import {StudentType} from '../02/02';
import {addSkill, doesStudentLivesInCity, setStudentActive} from './03';

let student: StudentType

beforeEach(() => {
    student = {
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
})

test('new skill added to student', () => {

    expect(student.technologies.length).toBe(4);

    addSkill(student, 'A');
    addSkill(student, 'B');

    expect(student.technologies.length).toBe(6);
    expect(student.technologies[4].title).toBe('A');
    expect(student.technologies[4].id).toBeDefined();
    expect(student.technologies[5].title).toBe('B');
    expect(student.technologies[5].id).toBeDefined();
})

test('student should be active', () => {

    expect(student.isActive).toBe(false);

    setStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('student lives in city', () => {

    const res1 = doesStudentLivesInCity(student, 'Minsk');
    const res2 = doesStudentLivesInCity(student, 'Moscow');

    expect(res1).toBe(true);
    expect(res2).toBe(false);
})