import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>But Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>
{
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCreams;
    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    // should return an object (key value pair)
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
    
    return {
        buyItem : dispatchFunction
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
