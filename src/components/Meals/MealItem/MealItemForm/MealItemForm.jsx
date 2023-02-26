import React, { useRef, useState } from 'react'
import s from './MealItemForm.module.css'
import Input from '../../../UI/Input'

// interface IMealItemFormProps {
//     id: string
// }

// : IMealItemFormProps
function MealItemForm({id, onAddCart}) {

    const [valueIsValid, setValueIsValid] = useState(true)

    let inputRef = useRef ()

    // : React.SyntheticEvent<EventTarget>
    function submitHandler (e) {
        e.preventDefault()
        const inputValue = inputRef.current.value


        if( +inputValue > 10 || inputValue.trim().length === 0 || +inputValue < 1 ) {
            setValueIsValid(false)
        }
        else {
            setValueIsValid(true)        
            onAddCart(+inputValue)
        }
    }


    const inputSettings = {
        type: "number",
        id: id,
        defaultValue: "1"
    }

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <Input ref={inputRef} input={inputSettings} label="Количество:" />
            <button>Добавить</button>
            { !valueIsValid && <p>Введите число от 1 до 10.</p> }
        </form>
    )
}
export default MealItemForm


