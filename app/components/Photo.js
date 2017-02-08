import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    };

    clickHandler(e){
        e.preventDefault();
        this.props.likeBtnHandler(this.props.post);
    }

    render(){
        const { post, comments } = this.props;
        return(
            <figure className="grid-figure">
                <div className="grid-photo-warp">
                    <Link to={`/view/${post.code}`}>
                        <img
                            src={"images/"+ post.display_src}
                            alt={post.caption} className="grid-photo"/>
                    </Link>
                </div>
                <CSSTransitionGroup transitionName="like"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                     <span key={post.likes} className="likes-heart">
                         {post.likes}
                     </span>
                </CSSTransitionGroup>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.clickHandler} className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
};

export default Photo;
