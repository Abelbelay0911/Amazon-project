import numeral from 'numeral';
import React from 'react';

const Currency = ({amount}) => {
    const value = numeral(amount).format("$0,0.00");
    return (
        <>
            {value}
        </>
    );
}

export default Currency;
