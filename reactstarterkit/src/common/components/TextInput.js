import React from 'react';

const TextInput = (props) =>{

    return (
        <div className="text-input-box">
            <input
                type='text'
                name='inputText'
                value={props.value}
                onChange={props.updateValue}
            />
        </div>
    )

}

export default TextInput;

