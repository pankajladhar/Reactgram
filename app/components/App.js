import React from 'react';
import _ from 'lodash';
import Brand from './Brand';
import posts from '../data/posts';
import commentsData from '../data/comments-data';

class App extends React.Component{
    constructor(props){
        super(props);
        this.likeBtnHandler = this.likeBtnHandler.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.state = {
            posts : posts,
            comments : commentsData
        }
        this.handlers = {
            likeBtnHandler : this.likeBtnHandler,
            addComment : this.addComment,
            removeComment : this.removeComment
        }
    };

    removeComment(commentToRemoved, postId){
        var relatedPosts = this.state.comments[postId];
        let commentsUpdated = [
            ...relatedPosts.slice(0, commentToRemoved),
            ...relatedPosts.slice(commentToRemoved+ 1)
        ];

        this.setState({
            comments: Object.assign({},
                {
                    [postId]: commentsUpdated
                }
            )
        });

    };

    addComment(author, comment, postId){
        var relatedComments = this.state.comments[postId] || [];

        let newState = [...relatedComments, {
            user: author,
            text: comment
        }];

        this.setState({
            comments: Object.assign({},
                {
                    [postId]: newState
                }
            )
        });
    };

    likeBtnHandler(val){
        let newState = this.state.posts.map((post) => {
            if (post.code == val.code) {
                post.likes = post.likes + 1;
            }
            return post;
        });
        this.setState({
            posts: Object.assign([], newState)
        })

    };


    render(){
        return(
            <div>
                <Brand />
                {this.props.children && React.cloneElement(this.props.children, {
                    posts: this.state.posts,
                    comments: this.state.comments,
                    handlers : this.handlers
                })}
            </div>
        )
    }

}

export default App;
