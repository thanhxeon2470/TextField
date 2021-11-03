import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        hintText: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }
    static defaultProps = {
        hintText: ""
    }
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    

    onChangeText = (event) =>{
        this.setState({value: event.target.value});
        const {onChange} = this.props;
        onChange(event);
    }

    render(){
        const inp = "inp flex flex-col justify-center items-start px-4 py-2 static top-45.45 right-0 bottom-0 left-0 border border-solid border-blue-356 box-border rounded-lg flex-none order-1 self-stretch flex-grow-0 my-2 hover:border-blue-18A active:border-blue-DAF placeholder-red-500";
        const inpErr = "inpErr flex flex-col justify-center items-start px-4 py-2 static top-31.25 right-0 bottom-27.08 left-0 bg-blue-A3A border border-solid border-red-336 box-border rounded-lg flex-none order-1"
        const labelStyle = "static inset-x-0 top-0 bottom-2/3 font-inter not-italic ont-medium text-sm leading-160 flex items-center text-blue-DAF flex-none order-none self-stretch flex-grow-0 mx-0 my-2"
        const hintTextFrame = "flex flex-row items-start py-0 px-3 static w-288 top-81.25 bottom-0 left-calc flex-none order-2 self-stretch flex-grow-0 mx-0 my-2"
        const hintText = "static w-264 top-0 bottom-0 left-3 font-inter not-italic ont-medium text-xs leading-150 text-red-336 flex-none order-none flex-grow mx-0 my-0"
        // const inp ="border-2 border-solid border-blue-356"
        const classname = this.props.hintText !== "" ? inpErr : inp; // Default
        const p = this.props.hintText !== "" ? <div className={hintTextFrame}>
                                                <p className={hintText}>{this.props.hintText}</p>
                                             </div>:undefined;

        return (
            <div>
                <label className={labelStyle} > {this.props.label}</label>
                <input  
                    // Cập nhật các props cho comp 
                    className={classname}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    onChange={this.onChangeText}
                    type="text"
                    >
                </input>
                {p}
            </div>
        )
    }
    
}

export default TextField;
