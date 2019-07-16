import React from 'react';
import './Tour.scss';

class Tour extends React.Component{

    state={
        infoDisplay:false
    }

    showInfo = () => {
        this.setState({
            infoDisplay:!this.state.infoDisplay
        })
    }
    render(){
        const {name, img, info, city,id} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className = "tour">
                <div className = "img-container">
                <img src = {img} alt = "Town"/>
                <span className = "close-image-btn" onClick = {() => removeTour(id)}><i class="far fa-times-circle"></i></span>
                </div>
                <div className = "city-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h4>Info <span className="info-btn" 
                    onClick = {this.showInfo}><i class="fas fa-info-circle" ></i></span></h4>
                    {this.state.infoDisplay && <p>{info}</p>}
                    
                </div>
            </article>
        );
    }
}
    


export default Tour;