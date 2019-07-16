import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{
  state = {
    post:null
  }
  componentDidMount(){
    const id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post:res.data
        })
      })
  }
  render(){
    const post = this.state.post ? (
      <div className="post">
            <h2 className="center">{this.state.post.title}</h2>
            <p>{this.state.post.body}</p>
      </div>
    ) : (
      <h4 className="center">Post Loading...</h4>
    )
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

export default Post;