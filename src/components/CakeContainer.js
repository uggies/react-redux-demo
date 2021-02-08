import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes - {props.numOfCakes}</h1>
            <button onClick={() => props.buyCake()}>Buy Cake</button>
        </div>
    )
}

// selectors
const mapStateToProps = state => {
    // return object
    return {
        numOfCakes : state.cake.numOfCakes
    }   
}

// 
const mapDispatchToProps = disptach => {
    return {
        buyCake : () => disptach(buyCake())
    }
}

// connect to react 

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CakeContainer)