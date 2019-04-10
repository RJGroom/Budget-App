import React from 'react';

const Purchase = (props) => {
    return (
        <tr>
            <td>
                <p>{props.price}</p>
            </td>
            <td>
                <p>{props.memo}</p>
            </td>
            <td>
                <p>{props.date}</p>
            </td>
        </tr>
    )
}


export default Purchase;