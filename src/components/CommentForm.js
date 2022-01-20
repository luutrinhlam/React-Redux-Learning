import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Row, Col, Label
} from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isModalOpen: false
        };
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));


    }

    render() {
        return (
            <>
                <Button onClick={this.toggleModal} outline>
                    <span className="fa fa-comment fa-lg">  Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" >Rating</Label>
                                <Col >
                                    <Control.select model=".rating" name="rating" id="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="firstname" >First Name</Label>
                                <Col >
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be at least 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" >Your Feedback</Label>
                                <Col >
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentForm