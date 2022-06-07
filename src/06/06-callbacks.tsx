import React, {ChangeEvent, MouseEvent} from 'react'

/*const callback = () => {
    console.log('wow')
}*/

// window.setTimeout(callback, 5000)

export const User = () => {

    const onClickButtonTest = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name);
        // console.log('test')
    }

    const onClickButtonDelete = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('delete')
    }

    const onClickButtonSave = () => {
        console.log('save')
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('changed!   ' + e.currentTarget.value)
        // console.log(e)
    }

    const onFocusInput = () => {
        console.log('focused')
    }

    const onBlurInput = () => {
        console.log('blur')
    }

    return (
        <div>
            <input
                placeholder={'Hello'}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
            />
            <button name={'1'} onClick={onClickButtonTest}>x</button>
            <button name={'2'} onClick={onClickButtonTest}>x</button>
            <button onClick={onClickButtonDelete}>delete</button>
            <button onClick={onClickButtonSave}>save</button>
        </div>
    )
}