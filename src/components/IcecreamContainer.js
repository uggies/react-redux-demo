import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IcecreamContainer(props) {
    return (
        <div>
            <h1>Number of Icecreams  - {props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

// selectors
const mapStateToProps = state => {
    // return object
    return {
        numOfIceCreams : state.icecream.numOfIceCreams
    }   
}

// 
const mapDispatchToProps = disptach => {
    return {
        buyIceCream : () => disptach(buyIceCream())
    }
}

// connect to react 

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(IcecreamContainer)