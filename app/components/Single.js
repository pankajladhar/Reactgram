import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const {postId} = this.props.params;
        const {posts, likeBtnHandler} = this.props.postsObj;
        let i = posts.findIndex((post) => post.code === postId);
        let post = posts[i];

        let comment = this.props.commentsObj.comments[postId] || [];

        const {removeComment, addComment} = this.props.commentsObj;

        return (
            <div className="single-photo">
                <Photo
                    post={post}
                    likeBtnHandler={likeBtnHandler}
                    commentsObj={this.props.commentsObj}
                />
                <Comment
                    userComments={comment}
                    removeComment={removeComment}
                    addComment={ addComment}
                    postId={postId}
                />
            </div>
        )
    }
}

export default Single
