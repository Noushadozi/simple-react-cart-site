import React from 'react';
import { multiply,add } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first,second)
    return (
        <div>
            <h3>This is Shoes Company</h3>
            <p>total add: {result}</p>
            <p>total sum : {sum}</p>
        </div>
    );
};

export default Shoes;