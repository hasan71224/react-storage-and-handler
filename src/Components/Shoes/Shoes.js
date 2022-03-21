import React from 'react';
import { add } from '../../Utilities/Calculation';
// import add from '../../Utilities/Calculation';

const Shoes = () => {
    const first = 14;
    const second = 45;
    const sum = add (first, second)
    return (
        <div>
            <h3>This is Shoes Components</h3>
            <p>Total Sum: {sum}</p>
        </div>
    );
};

export default Shoes;