import React, { Component } from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts}  from '../actions/postActions';


class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    //update the state
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.newPost){
    //         this.props.posts.unshift(nextProps.newPost);
    //     }

    // }
    render() {
        const postItems=this.props.posts.map(post=>(
            <div key={post.id}>
               <h3 style={{color:"green"}}>{post.title}</h3>
               <h4>{post.body}</h4>
            </div>
        ))
        return (
            <div>
                <h3>posts</h3>
                {postItems}
            </div>
        )
    }
}
Posts.PropType={
    fetchPosts:PropType.func.isRequired,
    posts:PropType.array.isRequired,
    // newPost:PropType.object
}
const mapStateToProps =state=>({
    posts:state.posts.items,
    // newPost:state.posts.item
})
export default connect(mapStateToProps,{fetchPosts})(Posts);