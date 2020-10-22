import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    // 🌍 HOOKS 🌎
    const [inputValue, setInputValue] = useState("");

    // 🖐 handleInputChange
    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    // 🖐 handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    // 📦 OUTPUT 📦
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

// 💬 Rules
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
