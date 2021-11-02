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
        let classname = this.props.hintText !== "" ? "inpErr" : "inp"; // Default
        const p = this.props.hintText !== "" ? <div className="hintTextFrame">
                                                <p className="hintText">{this.props.hintText}</p>
                                             </div>:undefined;

        return (
            <div>
                <label className="labelStyle" > {this.props.label}</label>
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
                {/* <p>{this.state.value}</p> */}
            </div>
        )
    }
    
}

export default TextField;
