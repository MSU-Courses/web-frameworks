import React from 'react';

//  Display the product
const Example1  = ({id}) => {
    const url = React.useMemo(() => `product/${id}`, [id])

    return <a href={url}>Product</a>
}

export default Example1;
