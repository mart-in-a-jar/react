import React, { Component } from 'react';
import { Card } from './components/card.js'
import {v4 as uuid} from 'uuid'
import './App.css';
import logo from "./logo.svg"

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      restaurants:
      [ 
      ]
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    this.setState({
      restaurants:[
        {
          id: uuid(),
          name: "Sushi S",
          details: "2301 Moscrop Street, Burnaby, BC V61 23Y",
          image: logo,
          starsSelected: 0,
        },
        {
          id: uuid(),
          name: "Agra Tandoori",
          details: "1255 Canada Way, Burnaby, BC V61 23Y",
          image: logo,
          starsSelected: 0,
        },
        {
          id: uuid(),
          name: "Bandidas Taqueria",
          details: "2544 Sanders Avenue, Richmond, BC V6Y 0B5",
          image: logo,
          starsSelected: 3,
        },
      ]
    });
  }

  OnChange(id, starsSelected) {
    this.setState(
      [...this.state.restaurants].map((restaurant) => {
        if(restaurant.id === id) {
          return restaurant.starsSelected = starsSelected
        }
        return null
      })
    );
  }

  render() {
    return (
      <div className="main-body">
        {[...this.state.restaurants].map((restaurant, index) => {
          let name = restaurant.name
          let image = restaurant.image
          let details = restaurant.details
          let starsSelected = restaurant.starsSelected
          let id = restaurant.id
          return(
            <Card
              key={index}
              name={name}
              details={details}
              image={image}
              starsSelected={starsSelected}
              id={id}
              change={(id, starsSelected) => this.OnChange(id, starsSelected)}
             />
          )
        })}      
      </div>
    );
  }
}

export default App;