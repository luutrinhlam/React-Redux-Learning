import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route, Navigate } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        <Header/>
        <Routes>
              <Route path='/home' element={<HomePage/>} />
              <Route path='/menu' element={ <Menu dishes={this.state.dishes} />} />
        </Routes>
          {/* <Navigate to="/home" replace/> */}
        <Footer/>
      </div>
    );
  }
}

export default Main;