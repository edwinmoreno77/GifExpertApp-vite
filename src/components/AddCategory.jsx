import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={e => onSubmit(e)} aria-label="form">
            <input type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={e => handleInputChange(e)}

            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
