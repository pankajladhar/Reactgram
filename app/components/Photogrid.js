import React from 'react';
import Photo from './Photo';

class Photogrid extends React.Component {
    constructor(props) {
        super(props);
        this._renderDOM = this._renderDOM.bind(this);
    };

    _renderDOM() {
        let { posts,comments, handlers } = this.props;
        return (posts.map((post, i) =>{
            return <Photo
                key={i}
                post={post}
                comments={comments}
                likeBtnHandler={handlers.likeBtnHandler}/>
        }));
    }


    render() {
        return (
            <div className="photo-grid">
                {this._renderDOM()}
            </div>
        )
    }
}

export default Photogrid
