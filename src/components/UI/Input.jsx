import React from 'react'
import s from './Input.module.css'


// interface IInputProps {
//     input: {
//         id: string,
//         type: string,
//         // maxLength?: number,
//         step?: string,
//         defaultValue?: string
//     }
//     label: string,
// }

// <HTMLInputElement, IInputProps>         : IInputProps

const Input = React.forwardRef  ( (props, ref  ) => {


    return(
        <div className={s.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            <input maxLength="3" ref={ref} {...props.input} />
        </div>
    )
})

export default Input