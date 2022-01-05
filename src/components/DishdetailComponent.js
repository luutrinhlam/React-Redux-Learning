// import React, { Component } from 'react';
// import {
//     Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle, ListGroup, ListGroupItem
// } from 'reactstrap';

// class DishDetail extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//         }
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return (
//                 <Card>
//                     <CardImg top width="100%" src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }

//     renderComments(dish) {
//         if (dish == null)
//             return (
//                 <div></div>
//             );
//         else {
//             const comments = dish.comments;
//             const cmt = comments.map((comment) => {
//                 return (
//                     <ListGroupItem className="border-0" key={comment.id}>
//                         {comment.comment} <br />
//                         -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
//                     </ListGroupItem>

//                 );
//             });

//             return (
//                 <div>
//                     <h4>Comments</h4>
//                     <ListGroup className="list-unstyled">
//                         {cmt}
//                     </ListGroup>
//                 </div>
//             )
//         }
//     }

//     render() {
//         return (
//             <div className="container">

//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         {this.renderDish(this.props.dish)}
//                     </div>

//                     <div className="col-12 col-md-5 m-1">
//                         {this.renderComments(this.props.dish)}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }



// export default DishDetail;
/////
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,ListGroup, ListGroupItem
} from 'reactstrap';


function RenderDish({ dish }) {
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

function RenderComments({ dish }) {
    if (dish == null)
        return (
            <div></div>
        );
    else {
        const comments = dish.comments;
        const cmt = comments.map((comment) => {
            return (
                <ListGroupItem className="border-0" key={comment.id}>
                    {comment.comment} <br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                </ListGroupItem>

            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ListGroup className="list-unstyled">
                    {cmt}
                </ListGroup>
            </div>
        )
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>

                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>
    );

}

export default DishDetail;