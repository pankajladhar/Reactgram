import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const {postId} = this.props.params;
        let { posts,comments, handlers } = this.props;

        let i = posts.findIndex((post) => post.code === postId);
        let post = i > -1 && posts[i];
        let comment = comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo
                    post={post}
                    likeBtnHandler={handlers.likeBtnHandler}
                    comments={comments}
                />
                <Comment
                    userComments={comment}
                    removeComment={handlers.removeComment}
                    addComment={ handlers.addComment}
                    postId={postId}
                />
            </div>
        )
    }
}

export default Single
