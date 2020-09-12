import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            return(
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
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