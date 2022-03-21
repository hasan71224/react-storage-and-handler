import React from 'react';
import { div, multiply } from '../../Utilities/Calculation';

const Cosmetics = () => {
    const first = 4;
    const second = 7;
    const total = multiply(first, second);
    const devaided = div(first, second);
    return (
        <div>
            <h2>This is Cosmetics Components</h2>
            <p>Total Multiply: {total} And Total Devaided: {devaided}</p>
        </div>
    );
};

export default Cosmetics;