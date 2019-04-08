import React from 'react';

const RecentPurchases = () => {
    return (
        <div>

            <h3>Add Recent Purchase</h3>
            <form>
                <label>Purchase Description</label> <br />
                <input type="text" name="purchase" placeholder="Place, Item, etc..." /> <br />
                <label>Purchase Amount</label> <br />
                <input type="number" name="purchaseAmount" value="0" /> <br />
                <input type="submit" value="Add Purchase" className="purchase-submit" />
            </form>
        </div>
    )
}


export default RecentPurchases;