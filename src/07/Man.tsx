import React, {useState} from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type ManPropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}


function useOwnState(m: string) {
    return [m, function () {
    }]
}


// export const Man = (props: ManPropsType) => {
export const Man: React.FC<ManPropsType> = ({title, man, ...props}) => {
// export const Man: React.FC<ManPropsType> = (props) => {

    // const {title, man: {name}} = props;
    // const {name} = props.man

    // const {title, man, ...restProps} = props;

    const [message, setMessage] = useState<string>('hi')
    const [m, setM] = useOwnState('hi')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    );
};