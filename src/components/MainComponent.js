import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) }
})

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId = () => {
      const { dishId } = useParams();
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          addComment={this.props.addComment} />
      );
    };
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/menu' element={<Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/aboutus' element={<About leaders={this.props.leaders} />} />
        </Routes>
        {/* <Navigate to="/home" replace/> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
