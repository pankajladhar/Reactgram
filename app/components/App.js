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
            postsObj : {
                posts: posts,
                likeBtnHandler : this.likeBtnHandler
            },
            commentsObj:{
                comments : commentsData || {},
                addComment : this.addComment,
                removeComment : this.removeComment
            }
        }
    };

    removeComment(commentToRemoved, postId){
        console.log("inside [removeComment] method");
        var relatedPosts = this.state.commentsObj.comments[postId];
        let commentsUpdated = [
            ...relatedPosts.slice(0, commentToRemoved),
            ...relatedPosts.slice(commentToRemoved+ 1)
        ];

        this.setState({
            commentsObj: Object.assign({}, this.state.commentsObj, {
                comments: {
                    [postId]: commentsUpdated
                }
            })
        });

    };

    addComment(author, comment, postId){
        var relatedComments = this.state.commentsObj.comments[postId] || [];

        let newState = [...relatedComments, {
            user: author,
            text: comment
        }];

        this.setState({
            commentsObj: Object.assign({}, this.state.commentsObj, {
                comments: {
                    [postId]: newState
                }
            })
        });
    };

    likeBtnHandler(val){
        let newState = this.state.postsObj.posts.map((post) => {
            if (post.code == val.code) {
                post.likes = post.likes + 1;
            }
            return post;

        });
        this.setState({
            postObj: Object.assign({}, ...this.state.postsObj, { posts: newState})
        })

    };


    render(){
        return(
            <div>
                <Brand />
                {this.props.children && React.cloneElement(this.props.children, {
                    postsObj: this.state.postsObj,
                    commentsObj: this.state.commentsObj
                })}
            </div>
        )
    }

}

export default App;
