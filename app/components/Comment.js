import React from "react";
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.clickaHandler = this.clickaHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };

    clickaHandler(i) {
        this.props.removeComment(i, this.props.postId)
    };

    submitHandler(e) {
        e.preventDefault();
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(author, comment, this.props.postId);
        this.refs.commentForm.reset();
    };

    __renderCommentsSection(userComments) {
        return (
            userComments.map((userComment, i)=> {
                return (
                    <div className="comment" key={i}>
                        <p>
                            <strong>{userComment.user}</strong>{userComment.text}
                            <button className="remove-comment" onClick={this.clickaHandler.bind(null, i)}>x</button>
                        </p>
                    </div>
                )
            })
        )
    }


    render() {
        return (
            <div className="comment">
                {this.__renderCommentsSection(this.props.userComments)}
                <form className="comment-from" ref="commentForm" onSubmit={this.submitHandler}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Comment
