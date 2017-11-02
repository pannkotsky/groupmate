import React, {Component} from "react";
import ReactDOM from "react-dom";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        // 1. Take data from form
        const text = ReactDOM.findDOMNode(this.refs.textArea).value;

        // 2. Submit form
        this.props.submit(text);

        // 3. Reset the form
        this.refs.formRef.reset();
    }

    render() {
        return (
            <form className="comment-form" ref="formRef" onSubmit={this.handleSubmit}>
                <FormGroup controlId="formControlsTextarea">
                    {this.props.label && <ControlLabel>{this.props.label}</ControlLabel>}
                    <FormControl componentClass="textarea" ref="textArea" placeholder={this.props.placeholder} required/>
                </FormGroup>
                <button type="submit">{this.props.buttonText}</button>
            </form>
        );
    }
}

export default CommentForm;
