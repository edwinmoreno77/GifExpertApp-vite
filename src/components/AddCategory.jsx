import { useState } from "react"


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }
    return (
        <form onSubmit={e => onSubmit(e)}>
            <input type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={e => handleInputChange(e)} // se deja visible el evento de forma educativa

            />
        </form>
    )
}
