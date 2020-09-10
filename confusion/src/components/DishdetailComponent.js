import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        const cmts = comments.map((cmm) => {
            return (
                <li className="list-unstyled" key={cmm.id}>
                    <p>{cmm.comment}</p>
                    <p>--{cmm.author}, {cmm.date}</p>
                </li>
            );
        });
        return(
            <Card>
                <h3>Comments</h3>
                {cmts}
            </Card>
        );
    }

    render() {
        const dish = this.props.dish;
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}


export default DishDetail;