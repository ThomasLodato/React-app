import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        );
        else {
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments}) {
        const cmts = comments.map((cmm) => {
            return (
                <li className="list-unstyled" key={cmm.id}>
                    <p>{cmm.comment}</p>
                    <p>--{cmm.author}, {new Intl.DateTimeFormat('en-US', { year:'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(cmm.date)))}</p>
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

    const DishDetail = (props) => {
        if (props.dish != null) {
            const dish = props.dish;
            return(
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={dish.comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }

export default DishDetail;