import { useState } from "react"

const useInput = (initValue = '') => {
    const [value, setValue] = useState(initValue);
    const handleChangeValue = (event) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChangeValue
    };
}

export default useInput;