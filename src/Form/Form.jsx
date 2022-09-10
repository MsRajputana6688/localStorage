import React from 'react'
import { useState } from 'react'
import './Form.css'
const Form = () => {
    let data = localStorage.getItem('item');
    const [state, setState] = useState({
        id: '',
        Name: '',
        Price: '',
    })
    const ChangeValue = (event) => {
        console.log(event.target);
        setState({
            ...state, [event.target.name]: event.target.value,
        })
    }
    const [product, setProduct] = useState(data ? JSON.parse(data) : '');
    const InsertData = () => {
        product ? product.map((curVal) => {
            if (curVal.id != state.id) {
                return setProduct([...product, state])
            } else {
                console.log("already Exists");
                return setProduct([...product])
            }
        }) : setProduct([...product, state])
    }
    const storeData = () => {
        localStorage.setItem('item', JSON.stringify(product))
    }
    const SubmitFrom = (event) => {
        event.preventDefault()
        InsertData()
        setTimeout(() => {
            storeData()
        })
    }
    return (
        <div className="form" >
            <form onSubmit={SubmitFrom}>
                <input type="text" name='id' value={state.id} onChange={ChangeValue} placeholder='Product ID' />
                <input type="text" name='Name' value={state.Name} onChange={ChangeValue} placeholder='Product Name' />
                <input type="text" name='Price' value={state.Price} onChange={ChangeValue} placeholder='Product Price' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form