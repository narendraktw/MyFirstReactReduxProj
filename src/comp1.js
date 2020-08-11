import React from 'react'

function Comp1(props) {
    console.log(props);
    return (
        <div>
          <h1>Hello world {props.name}</h1>
        </div>
        
    )
}

export default Comp1
