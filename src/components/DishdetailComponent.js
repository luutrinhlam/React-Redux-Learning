import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish == null)
            return (
                <div></div>
            );
        else {
            const comments = dish.comments;
            const cmt = comments.map((comment) => {
                return (
                    // <div>
                    //     <Card key={comment.id}>
                    //         <CardBody>
                    //             <CardText>{comment.comment}</CardText>
                    //             <CardText>--{comment.author}, {comment.date}</CardText>

                    //         </CardBody>
                    //     </Card>
                    // </div>
                    <ListGroupItem className="border-0">
                        {comment.comment} <br />
                        -- {comment.author}, {comment.date}
                    </ListGroupItem>
                    
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup className = "list-unstyled">
                        {cmt}
                    </ListGroup>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.item)}
                </div>

                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.item)}
                </div>
            </div>
        );
    }
}



export default DishDetail;