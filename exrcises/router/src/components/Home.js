import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Pokeball from '../pokeball.png';

class Home extends Component{
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts:res.data.slice(0,10)
        })
      })
  }
  render(){
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return <div className=" post card" key={post.id}>
                <img src={Pokeball} alt="A pokeball"/>
                 <div className="card-content">
                   <NavLink to = {`/${post.id}`}>
                    <span className="card-title red-text"><h4>{post.title}</h4></span>
                   </NavLink>
                  <p>{post.body}</p>
                 </div>
               </div>
      })
    ): (
      <h2 className="center">No Posts</h2>
    )
    return (
      <div className=" home container">
        <h2 className="center">Home</h2>
        {postList}
      </div>
    );
  }
};

export default Home;