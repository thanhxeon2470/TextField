import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TextField(props) {
    const [state , setState ] = useState("");

    const {
        hintText = "",
        onChange,
    } = props;
    const onChangeText = (event) =>{
        setState(event.target.value);
        // const {onChange} = props;
        onChange(event);
    }

    const inp = "w-full flex flex-col justify-center items-start px-4 py-2 static top-45.45 right-0 bottom-0 left-0 border border-solid border-blue-356 box-border rounded-lg flex-none order-1 self-stretch flex-grow-0 my-2 hover:border-blue-18A active:border-blue-DAF placeholder-blue-A83 font-inter not-italic font-normal text-sm leading-160";
    const inpErr = "w-full flex flex-col justify-center items-start px-4 py-2 static top-31.25 right-0 bottom-27.08 left-0 bg-blue-A3A border border-solid border-red-336 box-border rounded-lg flex-none order-1 font-inter not-italic font-normal text-sm leading-160 placeholder-white-9EA"
    const labelStyle = "static inset-x-0 top-0 bottom-2/3 font-inter not-italic font-medium text-sm leading-160 flex items-center text-blue-DAF flex-none order-none self-stretch flex-grow-0 mx-0 my-2"
    const hintTextFrame = "flex flex-row items-start py-0 px-3 static w-full top-81.25 bottom-0 left-calc flex-none order-2 self-stretch flex-grow-0 mx-0 my-2"
    const hintTextStyle = "static top-0 bottom-0 left-3 font-inter not-italic font-medium text-xs leading-150 text-red-336 flex-none order-none flex-grow mx-0 my-0"
    
    const classname = hintText !== "" ? inpErr : inp; // Default
    const p = hintText !== "" ? <div className={hintTextFrame}>
                                            <p className={hintTextStyle}>{hintText}</p>
                                            </div>:undefined;

    return (
        <div>
            <label className={labelStyle} > {props.label}</label>
            <input  
                // Cập nhật các props cho comp 
                className={classname}
                value={state.value}
                placeholder={props.placeholder}
                onChange={onChangeText}
                type="text"
                >
            </input>
            {p}
        </div>
    )
    
}

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    hintText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TextField;
