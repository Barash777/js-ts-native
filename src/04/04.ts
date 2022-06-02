export const ages = [12, 13, 18, 23, 27, 18, 27, 101, 97, 14];

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [101, 97]; // > 90

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

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = [
    {title: 'css', price: 100},
    {title: 'html', price: 20}
] // < 160