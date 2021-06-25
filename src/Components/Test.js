import React from 'react';


export default class Test extends React.Component{
    render(){
        return(
            <div>
            <h2>My name is {this.props.name}</h2>
            <p>This is a test component.</p>
            </div>
            
        )
    }

}