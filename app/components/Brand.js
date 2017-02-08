import React from 'react';
import { Link } from 'react-router';

class Brand extends React.Component{

    constructor(props){
        super(props);
    };

    render(){
        return(
            <h1 className="brand">
                <Link to="/">Reactgram</Link>
            </h1>
        )
    }
}

export default Brand;

