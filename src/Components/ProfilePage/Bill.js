import React from 'react';

const Bill = (props) => {
    return (
        <tr>
            <td>
                <p>{props.date}</p>
            </td>
            <td>
                <p>{props.memo}</p>
            </td>
            <td>
                <p>{props.price}</p>
            </td>
        </tr>
    )
}

export default Bill;