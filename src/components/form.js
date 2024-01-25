import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"></input>
                <button>получить погоду</button>
                <h1></h1>
            </form>
        );
    }
}

export default Form;