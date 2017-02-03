import React from 'react';

class Brand extends React.Component{

    constructor(props){
        super(props);
    };

    render(){
        return(
            <h1 className="brand">
                <a href="/app">Reactgram</a>
            </h1>
        )
    }
}

export default Brand;

