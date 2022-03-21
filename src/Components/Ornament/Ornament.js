import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import "./Ornament.css"

const Ornament = (props) => {
    const {name, price, id} = props.ornament;
// event handler added
const addToCard=(id)=>{
    console.log("Product Added", id);
    addToDb(id)
    }
// remove cart
const removeFromCard = id =>{
       console.log("product Remove", id); 
       removeFromDb(id)
}
    return (
        <div className='products'>
            <h3>Ornament Id: {id}</h3>
            <h4>Ornament Name: {name}</h4>
            <h4>Ornament Price: {price}</h4>
            {/* button for event handler  */}
            <button onClick={()=>addToCard(id)}>Add To Card</button>
            <button onClick={()=>removeFromCard(id)}>Remove To Card</button>
        </div>
    );
};

export default Ornament;