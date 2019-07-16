import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({posts:res.data})
      });
  }
    render () {
      let posts = this.state.posts.slice(0,4).map(post => {
        return <Post title = {post.title} content = {post.body} key = {post.id} author = "George"/>
      })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;