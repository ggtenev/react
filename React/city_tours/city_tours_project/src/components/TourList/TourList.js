
import './TourList.scss';
import Tour from '../Tour/Tour';
import data from '../../data/tourData';
import React, { Component } from 'react';


class TourList extends Component {
    state = {data}
    removeTourHandler = (index) =>{
        let tours = [...this.state.data];
        let selectedTours = tours.filter(tour => {
            return tour.id !==index;
        })
        this.setState({data:selectedTours});  
    }
    showInfoHandler = () => {

    }
    render() {
        let tours = [...this.state.data];
        
        return (
            <div className = "tour-grid">
                {tours.map((tour, i) => {
            return <Tour 
            removeTour = {this.removeTourHandler} 
            tour ={tour} 
            key = {tour.id}/>
           
        })}
            </div>
        );
    }
}

export default TourList;