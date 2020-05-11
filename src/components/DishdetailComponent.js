// implementing dish detail component via class and render methods

// import React, { Component} from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// // jogesh sir dish detail component

// class DishDetail extends Component{

//     renderDish(dish){
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} width="100%" />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }

//     renderComments(comments) {
//         if (comments != null){
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <h4>Comments</h4>
//                     <ul className="list-unstyled">
//                         {comments.map((comment) => {
//                             return(
//                                 <li key={comment.id}>
//                                     <p>{comment.Comment}</p>
//                                     <p>-- {comment.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             );
//         }

//         else{
//             return(
//                 <div></div>
//             )
//         }
//     }

//     render(){
//         if (this.props.dish != null){
//             return(
//                 <div className="container">
//                     <div className="row">
//                         {this.renderDish(this.props.dish)}
//                         {this.renderComments(this.props.dish.comments)}
//                     </div>
//                 </div>
//             );
//         }
//         else{
//             return(
//                 <div></div>
//             );
//         }
//     }

// }

// export default DishDetail;

// implementing dish detail component via functional methods

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

// jogesh sir dish detail component


    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} width="100%" />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }

        else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>   
                    </div>

                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }



export default DishDetail;