import React, { useEffect, useState } from 'react';
import Ornament from '../Ornament/Ornament';

const Ornaments = () => {
    // const ornaments = [
        //------------------------ 1st style ------------------------------------------

        // {id: 1, name: 'Ringer Ring', price: 5000},
        // {id: 2, name: 'Ear Ring', price: 25000},
        // {id: 3, name: 'Nose Pin', price: 2500},
        // {id: 4, name: 'Chain', price: 105000},
        // {id: 5, name: 'Nekles', price: 365000}

        //----------------------- 2nd Style -------------------------------------------
        // {
        //     "id": "6237668f431139231a1b668a",
        //     "price": "$2,206.30",
        //     "name": "Hughes Olsen"
        //   },
        //   {
        //     "id": "6237668f32bfe16f8d9ab97a",
        //     "price": "$2,702.39",
        //     "name": "Beulah Skinner"
        //   },
        //   {
        //     "id": "6237668f7e77bb9a493ef257",
        //     "price": "$3,223.45",
        //     "name": "Lara Wooten"
        //   },
        //   {
        //     "id": "6237668fd96cea50682ea92f",
        //     "price": "$2,012.83",
        //     "name": "Kitty Hodge"
        //   },
        //   {
        //     "id": "6237668fa708ec5896dcb4e7",
        //     "price": "$2,447.57",
        //     "name": "Meredith Rose"
        //   },
        //   {
        //     "id": "6237668f82a985f6ad8fa4f9",
        //     "price": "$3,762.71",
        //     "name": "Adela Bridges"
        //   }

        
    // ]
    
    //--------------------------- 3rd Style -------------------------------------------------    
    const [ornaments, setOrnaments] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setOrnaments(data))
    },[])
    return (
        <div>
            <h2>Welcome To Ornaments Stor</h2>
            {
                ornaments.map(ornament => <Ornament key={ornament.id} ornament={ornament}></Ornament>)
            }
        </div>
    );
};

export default Ornaments;