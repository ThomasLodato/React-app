import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Row, Col } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form'

class CommentForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }

      handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return(
            <div>
                <Button className="col-8 col-md-6" outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlfor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating"
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
                                <Col>
                                    <Label htmlfor="username">Your Name</Label>
                                    <Input type="text" id="username" name="username" placeholder="Your Name"
                                    innerRef={(input) => this.username = input} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="8"
                                        className="form-control" />
                                </Col>
                                </Row>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;