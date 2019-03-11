import React, { Component } from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions'



class PostForms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
      //call Actions

    }
    render() {
        return (
            <div>
                <h3>Add post</h3>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>title:</label>
                            <br />
                            <input type="text" onChange={this.onChange} name="title" value={this.state.title}></input>
                        </div>
                        <div>
                            <label>body:</label>
                            <br />
                            <textarea name="body" onChange={this.onChange} value={this.state.body} />
                        </div>
                        <br />
                        <button type="submit">submit</button>
                    </form>
                </div>

            </div>
        )
    }
}
PostForms.PropType={
    createPost:PropType.func.isRequired
}
export default connect(null,{createPost})(PostForms);